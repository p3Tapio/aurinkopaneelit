import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { initData } from './reducer/panelDataReducer'
import ProductionLineChart from './Components/LineChart'
import ProductionAreaChart from './Components/AreaChart'
import logo from './img/careeria_green.jpg'
import useWindowDimensions from './Tools/WindowDimensions'

function App() {

    const [showAreaChart, setShowAreaChart] = useState(true)
    const [buttonText, setButtonText] = useState('Viivakaavio')
    let { height, width } = useWindowDimensions()
    const dispatch = useDispatch()
    useEffect(() => { dispatch(initData()) }, [dispatch])
    width = width /8
    height = width / 3
    const changeChart = () => {
        setShowAreaChart(!showAreaChart)
        if (buttonText === 'Viivakaavio') setButtonText('Aluekaavio')
        else setButtonText('Viivakaavio')
    }

    return (
        <div className="verticalCenter">
            <div className="container ">
                {/* <div className="row"> */}
                {/* <div className="col-10"> */}
                <div>
                    <button onClick={changeChart} className="btn btn-info-sm btn1">{buttonText}</button>
                </div>
                <div>
                    {showAreaChart
                        ? < ProductionAreaChart />
                        : < ProductionLineChart />}
                </div>
                {/* </div> */}
                {/* </div> */}
                <div className="d-flex flex-row-reverse mb-4">
                    <img src={logo} style={{ width, height}} alt="logo" />
                </div>
            </div>
        </div>

    );
}
export default App;

