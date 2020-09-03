import React from 'react'
import useWindowDimensions from '../Tools/WindowDimensions'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts'

const ProductionAreaChart = ({data}) => {
    
    let {height, width} = useWindowDimensions() 
    width = width < 800 ? width : 1200
    height = width < 800 ? width/2 : 600

    return (
        <div>
            <AreaChart width={width} height={height} data={data} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" name="Careeria Amt" dataKey="careeria_amt" stackId="1"  stroke='#91EB93' fill='#91EB93'  />
                <Area type="monotone" name="Careeria Hkk" dataKey="careeria_hkk" stackId="1" stroke='#38AE3A' fill='#38AE3A' />
                <Area type="monotone" name="Careeria Vantaa" dataKey="careeria_vantaa" stackId="1" stroke='#629D63' fill='#629D63' />
            </AreaChart>
        </div>
    )
}

export default ProductionAreaChart

