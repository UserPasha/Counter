const INCREMENT = 'INCREMENT'
const RESET = 'RESET'
const INSTALLING_MIN_DATA = 'INSTALLING_MIN_DATA'
const INSTALLING_MAX_DATA = 'INSTALLING_MAX_DATA'
const TOGGLE_BOARD = 'TOGGLE_BOARD'
const START_COUNT_VALUE = 'START_COUNT_VALUE'

type initialStateType = {
    minValue: number
     maxValue: number
    counter: number
    blueBoard: boolean
    // disabling: boolean
}

const initialState: initialStateType = {
    minValue: 0,
     maxValue: 0,
    counter: 0,
     blueBoard: true,
    // disabling: false
}
type actionType = incrementACType |
    resetACType | installingMinDataACType |
    installingMaxDataACType | toggleBoardACType |
    installingCountDataACType

export const counterReducer = (state= initialState, action: actionType):any=>{
    switch (action.type){
        case INCREMENT:{
            return {...state, counter:state.counter+1};
        }
        case RESET:{
            return {...state, counter: state.minValue};
        }
        case INSTALLING_MIN_DATA:{
            return {...state, minValue:action.value}
        }
        case INSTALLING_MAX_DATA:{
            return {...state, maxValue:action.value}
        }
        case START_COUNT_VALUE:{
            return {...state, counter:action.value}
        }
        case TOGGLE_BOARD:{
            return {...state, blueBoard:action.status}
            //return state.blueBoard= action.status
        }
        default: return state
    }
}

export const incrementAC = ():{type: 'INCREMENT'}=>{
    return{
        type: INCREMENT
    } as const
}
export type incrementACType = ReturnType<typeof incrementAC>

export const resetAC = ():{type: 'RESET'}=>{
    return{
        type: RESET
    } as const
}
export type resetACType = ReturnType<typeof resetAC>

export const installingMinDataAC = (value: number):{type: 'INSTALLING_MIN_DATA', value: number}=>{
    return{
        type: INSTALLING_MIN_DATA,
        value
    } as const
}
export type installingMinDataACType = ReturnType<typeof installingMinDataAC>

export const installingMaxDataAC = (value: number):{type: 'INSTALLING_MAX_DATA', value: number}=>{
    return{
        type: INSTALLING_MAX_DATA,
        value
    } as const
}
export type installingMaxDataACType = ReturnType<typeof installingMaxDataAC>

export const installingCountDataAC = (value: number):{type: 'START_COUNT_VALUE', value: number}=>{
    return{
        type: START_COUNT_VALUE,
        value
    } as const
}
export type installingCountDataACType = ReturnType<typeof installingCountDataAC>

export const toggleBoardAC = (status:boolean):{type: 'TOGGLE_BOARD', status: boolean}=>{
    return{
        type: TOGGLE_BOARD,
        status
    } as const
}
export type toggleBoardACType = ReturnType<typeof toggleBoardAC>