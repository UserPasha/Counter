// export const sum = (a: number, b: number) => a + b
// export const sub = (a: number, b: number) => a - b
// export const milt = (a: number, b: number) => a * b
// export const div = (a: number, b: number) => a / b

export type ActionType ={
    type: "SUM" | "SUB" | "MILT" | "DIV"
    num: number
}

export const numReducer = (state: number, action: ActionType)=>{
    switch (action.type) {
        case "SUM":
            return state + action.num
        case "SUB":
            return state - action.num
        case "MILT":
            return state * action.num
        case "DIV":
            return state / action.num
        default:
            return state
    }
}