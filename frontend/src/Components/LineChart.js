import React from 'react'
import useContainerWidth from '../Hook/ContainerWidth'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { useSelector } from 'react-redux'

const ProductionLineChart = () => {

    const data = useSelector(state => state)
    const { width } = useContainerWidth()
    const height = Math.round(width / 2)

    return (
        <div>
            <LineChart width={width} height={height} data={data} margin={{ right: 50 }}  >
                <XAxis dataKey="date" />
                <YAxis orientation="left" tickFormatter={(label) => `${label} kWh`}/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="Careeria Amt" dataKey="careeria_amt" stroke="#000000" unit=" kWh"/>
                <Line type="monotone" name="Careeria Hkk" dataKey="careeria_hkk" stroke="#656566 " unit=" kWh"/>
                <Line type="monotone" name="Careeria Vantaa" dataKey="careeria_vantaa" stroke="#8B8B8C" unit=" kWh"/>
                <Line type="monotone" name="Careeria Pmt" dataKey="careeria_pmt" stroke="#a4a4a6" unit=" kWh"/>
            </LineChart>
        </div>
    )
}
export default ProductionLineChart
