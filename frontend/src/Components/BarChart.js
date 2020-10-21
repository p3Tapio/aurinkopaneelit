import React, { useState } from 'react'
import useContainerWidth from '../Hook/ContainerWidth'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useSelector } from 'react-redux'

const ProductionBarChart = () => {

    const { width } = useContainerWidth() 
    const height = Math.round(width / 2)
    
    const data = useSelector(state => state.month)
    const [prodData] = useState(data.filter(x => x.pv_system))
    const [label] = useState(`Kennojen tuotto ${data[4].date.toLocaleDateString('fi-FI', { month: 'long' })}ssa`)

    return (
        <div>
            <BarChart width={width} height={height} data={prodData}>
                <XAxis dataKey="pv_system" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="production" name={label} fill='#38AE3A' />
            </BarChart>
        </div>
    )
}

export default ProductionBarChart


