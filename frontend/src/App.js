import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { initData } from './reducer/panelDataReducer'
import ProductionLineChart from './Components/LineChart'
import ProductionAreaChart from './Components/AreaChart'
import ProductionBarChart from './Components/BarChart'
import logo from './img/careeria_green.jpg'
import useContainerWidth from './Hook/ContainerWidth'

function App() {

    const [showChart, setShowChart] = useState('aluekaavio')

    let { width } = useContainerWidth()
    width = width / 5
    const height = width / 3

    const dispatch = useDispatch()
    useEffect(() => { dispatch(initData()) }, [dispatch])

    return (

        <div style={{ paddingTop: "10%", paddingBottom: "10%" }}>
            <div className="container" id="mainContainer">
                <div>
                    <button onClick={() => setShowChart('aluekaavio')} className="btn btn-info-sm btn1">Aluekaavio</button>
                    <button onClick={() => setShowChart('viivakaavio')} className="btn btn-info-sm btn1">Viivakaavio</button>
                    <button onClick={() => setShowChart('pylvaskaavio')} className="btn btn-info-sm btn1">Pylväskaavio</button>
                </div>
                <div className="mb-4">
                    {showChart === 'aluekaavio' && < ProductionAreaChart />}
                    {showChart === 'viivakaavio' && < ProductionLineChart />}
                    {showChart === 'pylvaskaavio' && < ProductionBarChart />}
                </div>
                <div className="d-flex flex-row-reverse mt-4 mb-4">
                    <img src={logo} style={{ width, height }} alt="logo" />
                </div>
            </div>
        </div>

    )
}
export default App