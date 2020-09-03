import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductionLineChart from '../Components/ProductionLineChart'
import ProductionAreaChart from '../Components/ProductionAreaChart'

const ProductionCharts = () => {
    const [data, setData] = useState()
    const [showAreaChart, setShowAreaChart] = useState(true)
    const [buttonText, setButtonText] = useState('Viivakaavio')
    // const url = 'http://localhost:3001/api/dateandyield' 
    const url = 'https://aurinkopaneelit.herokuapp.com/api/dateandyield'

    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data.map(({ careeria_amt, careeria_hkk, careeria_vantaa, ...rest }) => ({ ...rest, careeria_amt: parseFloat(careeria_amt), careeria_hkk: parseFloat(careeria_hkk), careeria_vantaa: parseFloat(careeria_vantaa) })))
        }).catch(err => console.log('err.response', err.response))

    }, [])

    const changeChart = () => {
        setShowAreaChart(!showAreaChart)
        if (buttonText === 'Viivakaavio') setButtonText('Aluekaavio')
        else setButtonText('Viivakaavio')
    }

    if (data) {
        return (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <button onClick={changeChart} style={{margin:"20px"}}>{buttonText}</button>
                </div>
                {showAreaChart
                    ? <ProductionAreaChart data={data} />
                    : <ProductionLineChart data={data} />}
            </div>

        )
    } else {
        return <p>Ladataan tietoja ..... </p>
    }
}

export default ProductionCharts
