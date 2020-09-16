const panelDataReducer = (state = [], action) => {

    switch (action.type) {
        case 'INIT_DATA':
            return action.data
        default:
            return state
    }
}
export const initData = (panelData) => {
    
    return {
        type: 'INIT_DATA',
        data: panelData,
    }
}
export default panelDataReducer