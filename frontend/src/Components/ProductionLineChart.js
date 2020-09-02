import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const ProductionLineChart = ({ data }) => {
    return (
        <div>
            <LineChart width={600} height={400} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" name="Careeria Amt" dataKey="careeria_amt" stroke="#8884d8" />
                <Line type="monotone" name="Careeria Hkk" dataKey="careeria_hkk" stroke="#8884d8" />
                <Line type="monotone" name="Careeria Vantaa" dataKey="careeria_vantaa" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}
export default ProductionLineChart
