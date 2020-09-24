import React from 'react'
import useWindowDimensions from '../Tools/WindowDimensions'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useSelector } from 'react-redux'

const ProductionLineChart = () => {

    const data = useSelector(state => state)
    let { height, width } = useWindowDimensions()
    height = width > 1350 ? Math.round(width / 3) : Math.round(width / 2)

    return (
        <div>
            <ResponsiveContainer width="100%" height={height}>
                <LineChart width={width} height={height} data={data} >
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" name="Careeria Amt" dataKey="careeria_amt" stroke="#000000" />
                    <Line type="monotone" name="Careeria Hkk" dataKey="careeria_hkk" stroke="#656566 " />
                    <Line type="monotone" name="Careeria Vantaa" dataKey="careeria_vantaa" stroke="#8B8B8C" />
                    <Line type="monotone" name="Careeria Pmt" dataKey="careeria_pmt" stroke="#a4a4a6" />
                </LineChart>
            </ResponsiveContainer>
            {/* */}
        </div>
    )

}
export default ProductionLineChart
