import {ActionType,  numReducer} from "./task";

/*test("sum of two numbers", () => {
    // 1. тестовые данные:
    const a: number = 10
    const b: number = 20
    //2. Выполнение темтируемого кода
    const result = sum(a,b)
    //3. Проверка результата
    expect(result).toBe(30)
})
test("sub of two numbers", () => {
    const a: number = 30
    const b: number = 20
    const result = sub(a,b)
    expect(result).toBe(10)
})
test("mult of two numbers", () => {
    const a: number = 30
    const b: number = 20
    const result = milt(a,b)
    expect(result).toBe(600)
})
test("mult of two numbers", () => {
    const a: number = 20
    const b: number = 20
    const result = div(a,b)
    expect(result).toBe(1)
})*/
test("test by resucer", () => {
    const zp: number = 2000
    const action: ActionType = {
        type: "SUM",
        num: 500
    }
    const result = numReducer(zp, action)
    expect(result).toBe(2500)
})
test("test by resucer2", () => {
    const zp: number = 2000
    const action: ActionType = {
        type: "SUB",
        num: 500
    }
    const result = numReducer(zp, action)
    expect(result).toBe(1500)
})
test("test by resucer3", () => {
    const zp: number = 2000
    const action: ActionType = {
        type: "MILT",
        num: 500
    }
    const result = numReducer(zp, action)
    expect(result).toBe(1000_000)
})
test("test by resucer4", () => {
    const zp: number = 2000
    const action: ActionType = {
        type: "DIV",
        num: 500
    }
    const result = numReducer(zp, action)
    expect(result).toBe(4)
})