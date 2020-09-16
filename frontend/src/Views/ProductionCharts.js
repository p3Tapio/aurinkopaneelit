import React, { useState } from 'react'
import ProductionLineChart from '../Components/ProductionLineChart'
import ProductionAreaChart from '../Components/ProductionAreaChart'

const ProductionCharts = () => {

    const [showAreaChart, setShowAreaChart] = useState(true)
    const [buttonText, setButtonText] = useState('Viivakaavio')

    const changeChart = () => {
        setShowAreaChart(!showAreaChart)
        if (buttonText === 'Viivakaavio') setButtonText('Aluekaavio')
        else setButtonText('Viivakaavio')
    }

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div style={{ whiteSpace: 'nowrap' }}>
                <button onClick={changeChart} style={{ margin: "20px" }}>{buttonText}</button>
            </div>
            {showAreaChart
                ? <ProductionAreaChart />
                : <ProductionLineChart />}
        </div>
    )
}

export default ProductionCharts
