import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initData } from './reducer/panelDataReducer'
import axios from 'axios'
import './App.css'
import ProductionCharts from './Views/ProductionCharts'

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://aurinkopaneelit.herokuapp.com/api/dateandyield').then(res => {
            const resEdit = res.data.map(({ careeria_amt, careeria_hkk, careeria_vantaa, careeria_pmt, ...rest }) =>
                ({
                    ...rest,
                    careeria_amt: parseFloat(careeria_amt),
                    careeria_hkk: parseFloat(careeria_hkk),
                    careeria_vantaa: parseFloat(careeria_vantaa),
                    careeria_pmt: parseFloat(careeria_pmt)
                }))
            dispatch(initData(resEdit))
        })
    }, [dispatch])

    return (
        <div className="App">
            <ProductionCharts />
        </div>
    );
}
export default App;
