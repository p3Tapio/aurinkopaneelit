require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.static('build')) 
app.use(express.json())
const SunnyPortal = require('./portal')
const Panel = require('./models/panel')

app.get('/api/dateandyield', (request, response) => {

    Panel.find({}).then(res => {

        const date = new Date()   
        date.setDate(date.getDate() - 7)
        res = res.filter(x => x.Date > date)
        res.map(x=> {x.Date = x.Date.setDate(x.Date.getDate() - 1) })

        const resEdit = res.map(x => ({
            pv_system: x.PV_System,
            yield: x.Total_yield_yesterday,
            date: `${x.Date.getDate()}.${x.Date.getMonth() + 1}.${x.Date.getFullYear()}`
        })) 
        const x = [...new Set(resEdit.map(x => x.date))]
        const data = Object.keys(x).map((key) => ({
            date: x[key],
            careeria_amt: resEdit.map(y => x[key] == y.date && y.pv_system == 'Careeria Amt' ? y.yield : null).filter(x => x != null).toString(),
            careeria_hkk: resEdit.map(y => x[key] == y.date && y.pv_system == 'Careeria HKK' ? y.yield : null).filter(x => x != null).toString(),
            careeria_vantaa: resEdit.map(y => x[key] == y.date && y.pv_system == 'Careeria Vantaa' ? y.yield : null).filter(x => x != null).toString(),
            careeria_pmt: resEdit.map(y => x[key] == y.date && y.pv_system == 'Careeria PMT' ? y.yield : null).filter(x => x != null).toString(),
        }))
        response.status(200).json(data)

    }).catch((err) => {
        response.status(400).json({ error: 'failed to get' })
        console.log('/api/dateandyield error: ', err)
    })
})


app.get('/api/monthproduction', async (request, response) => {

    let date = new Date()
    date.setDate(date.getDate() - 1)
    const data = await Panel.find({ Date: { $gte: date } })

    const dataEdit = data.map(x => ({
        pv_system: x.PV_System,
        production: x.Total_yield_currentMonth
    }))
    const withDate = { date: data[0].Date, data: dataEdit.map(x => x) }
    response.status(200).json(withDate)

})

setInterval(function () {

    const date = new Date()
    if (date.getHours() === 1 && date.getMinutes() === 30) {  
      
        const params = { username: process.env.SUNNY_USER, password: process.env.SUNNY_PASS }
        const sunnyPortal = new SunnyPortal(params)
       
        sunnyPortal.currentProduction(function (err, body) {

            if (body) {
                const date = new Date() 
                const thisMM = date.toLocaleDateString('default', { month: 'long' })
                const lastMonth = new Date()
                lastMonth.setMonth(lastMonth.getMonth() - 1)
                const lastMM = lastMonth.toLocaleDateString('default', { month: 'long' })
                let dd = date.getDate()
                let mm = date.getMonth() + 1
                let yyyy = date.getFullYear()
                const today = `${mm}/${dd}/${yyyy}`
                date.setDate(date.getDate()-1)
                dd = date.getDate()
                mm = date.getMonth() + 1
                yyyy = date.getFullYear()
                const yesterday = `${mm}/${dd}/${yyyy}`
    
                for (i = 0; i < 4; i++) {
                    const data = new Panel({
                        PV_System: body[i]['PV System'],
                        PV_System_Power: body[i]['PV system power'],
                        Total_yield_today: body[i][`Total yield [kWh] ${today}`],      
                        Total_yield_yesterday: body[i][`Total yield [kWh] ${yesterday}`],
                        Total_yield_lastMonth: body[i][`Total yield [kWh] ${lastMM} ${yyyy}`],
                        Total_yield_currentMonth: body[i][`Total yield [kWh] ${thisMM} ${yyyy}`],
                        Total_yield_MeterReading: body[i][`Total yield [kWh] Meter reading`],
                        Specific_yield_currentMonth: body[i][`Specific yield [kWh/kWp] ${thisMM} ${yyyy}`],
                        Specific_yield_currentYear: body[i][`Specific yield [kWh/kWp] ${yyyy}`],
                        Date: new Date(),  
                    })
                    console.log('data', data)
                    data.save()
                }
                console.log('data saved at: ', date) 
            } else {
                console.log('Error: no currentProduction() body ', date)
                console.log('Error msg: ', err)
            }
        })
    }
}, 60000)  

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
