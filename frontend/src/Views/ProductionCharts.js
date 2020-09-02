import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductionLineChart from '../Components/ProductionLineChart'
import ProductionAreaChart from '../Components/ProductionAreaChart'

const ProductionCharts = () => {
    const [data, setData] = useState()
    const [showLineChart, setShowLineChart] = useState(false)
    // const url = 'http://localhost:3001/api/dateandyield' 
    const url = 'https://aurinkopaneelit.herokuapp.com/api/dateandyield'
    console.log('showLineChart', showLineChart)
    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data.map(({ careeria_amt, careeria_hkk, careeria_vantaa, ...rest }) => ({ ...rest, careeria_amt: parseFloat(careeria_amt), careeria_hkk: parseFloat(careeria_hkk), careeria_vantaa: parseFloat(careeria_vantaa) })))
        }).catch(err => console.log('err.response', err.response))

    }, [])

    if (data) {
        return (

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <h4 style={{ display: 'inline-block', marginRight: '15px' }}>Aurinkokennot</h4>
                    <button onClick={() => setShowLineChart(!showLineChart)}>Vaihda graafi</button>
                </div>
                {showLineChart
                    ? <ProductionLineChart data={data} />
                    : <ProductionAreaChart data={data} />}
            </div>

        )
    } else {
        return <p>Ladataan tietoja ..... </p>
    }
}

export default ProductionCharts
