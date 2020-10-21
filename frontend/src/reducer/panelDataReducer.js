import axios from 'axios'
const baseUrl = "http://localhost:3001/api/" 

const panelDataReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_WEEK':
            return { ...state, week: action.data }
        case 'INIT_MONTH':
            return { ...state, month: action.data }
        default:
            return state
    }
}

const initWeekData = () => {
    return async dispatch => {
        
        const res = await axios.get(`${baseUrl}dateandyield`)
        const panelData = res.data.map(({ careeria_amt, careeria_hkk, careeria_vantaa, careeria_pmt, ...rest }) =>
            ({
                ...rest,
                careeria_amt: parseFloat(careeria_amt),
                careeria_hkk: parseFloat(careeria_hkk),
                careeria_vantaa: parseFloat(careeria_vantaa),
                careeria_pmt: parseFloat(careeria_pmt)
            }))

        dispatch({
            type: 'INIT_WEEK',
            data: panelData,
        })
    }
}
const initMonthData = () => {
    return async dispatch => {
        const res = await axios.get(`${baseUrl}monthproduction`)

        const panelData = res.data.data.map(({ production, ...rest}) => ({
            ...rest, 
            production: parseFloat(production)
        }))
        panelData.push({date: new Date(res.data.date)})
     
        dispatch({
            type: 'INIT_MONTH',
            data: panelData,
        })
    }
}

export const initData = () => async (dispatch) => {
    await Promise.all([
        dispatch(initWeekData()),
        dispatch(initMonthData())
    ])
}


export default panelDataReducer
