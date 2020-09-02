import React from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from 'recharts'


const ProductionAreaChart = ({ data }) => {
    return (
        <ResponsiveContainer>
            <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" name="Careeria Amt" dataKey="careeria_amt" stackId="1" stroke='#91EB93' fill='#91EB93' />
                <Area type="monotone" name="Careeria Hkk" dataKey="careeria_hkk" stackId="1" stroke='#38AE3A' fill='#38AE3A' />
                <Area type="monotone" name="Careeria Vantaa" dataKey="careeria_vantaa" stackId="1" stroke='#629D63' fill='#629D63' />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default ProductionAreaChart

