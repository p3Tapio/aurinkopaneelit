import React from 'react'
import useWindowDimensions from '../Tools/WindowDimensions'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer } from 'recharts'
import { useSelector } from 'react-redux'

const ProductionAreaChart = () => {

    const data = useSelector(state => state)
    let { height, width } = useWindowDimensions()
    height = width > 1350 ? Math.round(width / 3) : Math.round(width / 2)

    return (
        <div>
            <ResponsiveContainer width="100%" height={height}>
                <AreaChart data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" name="Careeria Amt" dataKey="careeria_amt" stackId="1" stroke='#3CBA3E' fill='#3CBA3E' />
                    <Area type="monotone" name="Careeria Hkk" dataKey="careeria_hkk" stackId="1" stroke='#236E24' fill='#236E24' />
                    <Area type="monotone" name="Careeria Vantaa" dataKey="careeria_vantaa" stackId="1" stroke='#50FA53' fill='#50FA53' />
                    <Area type="monotone" name="Careeria Pmt" dataKey="careeria_pmt" stackId="1" stroke='#38AE3A' fill='#38AE3A' />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ProductionAreaChart

