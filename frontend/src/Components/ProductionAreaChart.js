import React from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts'

const ProductionAreaChart = ({data}) => {
    return (
        <div>
            <AreaChart width={600} height={400} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" name="Careeria Amt" dataKey="careeria_amt" stackId="1" stroke='#8884d8' fill='#8884d8' />
                <Area type="monotone" name="Careeria Hkk" dataKey="careeria_hkk" stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                <Area type="monotone" name="Careeria Vantaa" dataKey="careeria_vantaa" stackId="1" stroke='#ffc658' fill='#ffc658' />
            </AreaChart>
        </div>
    )
}

export default ProductionAreaChart

