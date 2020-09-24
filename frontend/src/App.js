import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { initData } from './reducer/panelDataReducer'
import ProductionLineChart from './Components/LineChart'
import ProductionAreaChart from './Components/AreaChart'
import logo from './img/careeria_green.jpg'
import useContainerDimensions from './Tools/ContainerDimensions'

function App() {

    const [showAreaChart, setShowAreaChart] = useState(true)
    const [buttonText, setButtonText] = useState('Viivakaavio')
    
    let { height, width } = useContainerDimensions()
    width = width / 5
    height = width / 3

    const dispatch = useDispatch()
    useEffect(() => { dispatch(initData()) }, [dispatch])


    const changeChart = () => {
        setShowAreaChart(!showAreaChart)
        if (buttonText === 'Viivakaavio') setButtonText('Aluekaavio')
        else setButtonText('Viivakaavio')
    }

    return (
        <div className="verticalCenter">
            <div className="container" id="mainContainer">
                <div>
                    <button onClick={changeChart} className="btn btn-info-sm btn1">{buttonText}</button>
                </div>
                <div className="mb-4">
                    {showAreaChart
                        ? < ProductionAreaChart />
                        : < ProductionLineChart />}
                </div>
                <div className="d-flex flex-row-reverse mt-4">
                    <img src={logo} style={{ width, height }} alt="logo" />
                </div>
            </div>
         </div>

    );
}
export default App;

