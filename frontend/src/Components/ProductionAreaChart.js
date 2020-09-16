import React from 'react'
import useWindowDimensions from '../Tools/WindowDimensions'
import { useSelector } from 'react-redux'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts'

const ProductionAreaChart = () => {

    const data = useSelector(state => state)
    let { height, width } = useWindowDimensions()
    width = width < 800 ? width : 1200
    height = width < 800 ? width / 2 : 600

    return (
        <div>
            <AreaChart width={width} height={height} data={data} >
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
        </div>
    )
}

export default ProductionAreaChart

