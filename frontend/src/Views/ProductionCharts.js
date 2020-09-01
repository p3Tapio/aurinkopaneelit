import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductionLineChart from '../Components/ProductionLineChart'
import ProductionAreaChart from '../Components/ProductionAreaChart'

const ProductionCharts = () => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://aurinkopaneelit.herokuapp.com/api/dateandyield').then(res => {
            setData(res.data.map(({ careeria_amt, careeria_hkk, careeria_vantaa, ...rest }) => ({ ...rest, careeria_amt: parseFloat(careeria_amt), careeria_hkk: parseFloat(careeria_hkk), careeria_vantaa: parseFloat(careeria_vantaa) })))
        }).catch(err => console.log('err.response', err.response))

    }, [])

    if (data) {
        return (
            <div style={{margin:"10%"}}>
                <h4>Aurinkokennot</h4>
                <ProductionLineChart data={data} />
                <ProductionAreaChart data={data} />
            </div>
        )
    } else {
        return <p>Ladataan tietoja ..... </p>
    }
}

export default ProductionCharts
