const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

// TODO connect oikeaan aikaan -- nyt näyttää että yhteys on kokoajan käynnissä 

console.log('Connecting to ', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('Connected to MongoDB')     // TODO  --- voiko koko tämän connect-metodin siirtää sunnyPortal.currentProduction() sisään?  
    }).catch(error => {
        console.error('Error: ', error.message)
    })

const paneeliSchema = new mongoose.Schema({
    PV_System: String,
    PV_System_Power: String,
    Total_yield_today: String,
    Total_yield_yesterday: String,
    Total_yield_lastMonth: String,       // TODO voiko nämä muodostaa tyyliin `${thisMonthName} ?? 
    Total_yield_currentMonth: String,
    Total_yield_MeterReading: String,
    Specific_yield_currentMonth: String,
    Specific_yield_currentYear: String,
    Date: { type: Date, expires: '8d' }
})
// TODO disconnect, kun "get" sunnyportaliin on tehty? 
module.exports = mongoose.model('Panel', paneeliSchema)