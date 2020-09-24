import axios from 'axios'

const panelDataReducer = (state = [], action) => {

    switch (action.type) {
        case 'INIT_DATA':
            return action.data
        default:
            return state
    }
}
export const initData = () => {

    return async dispatch => {

        const res = await axios.get('https://aurinkopaneelit.herokuapp.com/api/dateandyield')
        const panelData = res.data.map(({ careeria_amt, careeria_hkk, careeria_vantaa, careeria_pmt, ...rest }) =>
            ({
                ...rest,
                careeria_amt: parseFloat(careeria_amt),
                careeria_hkk: parseFloat(careeria_hkk),
                careeria_vantaa: parseFloat(careeria_vantaa),
                careeria_pmt: parseFloat(careeria_pmt)
            }))

        dispatch({
            type: 'INIT_DATA',
            data: panelData,
        })
    }
}

export default panelDataReducer
