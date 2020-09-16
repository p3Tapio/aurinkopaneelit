import React from 'react'
import useWindowDimensions from '../Tools/WindowDimensions'
import { useSelector } from 'react-redux'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const ProductionLineChart = () => {

    const data = useSelector(state => state)
    let { height, width } = useWindowDimensions()
    width = width < 800 ? width : 1200
    height = width < 800 ? width / 2 : 600

    return (
        <div>
            <LineChart width={width} height={height} data={data} >
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="Careeria Amt" dataKey="careeria_amt" stroke="#8884d8" />
                <Line type="monotone" name="Careeria Hkk" dataKey="careeria_hkk" stroke="#8884d8" />
                <Line type="monotone" name="Careeria Vantaa" dataKey="careeria_vantaa" stroke="#8884d8" />
                <Line type="monotone" name="Careeria Pmt" dataKey="careeria_pmt" stroke="#8884d8" />
            </LineChart>
        </div>
    )

}
export default ProductionLineChart
