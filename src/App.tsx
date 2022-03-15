import React, {useEffect, useState} from 'react';

import './App.css';
import {SetCounter} from "./Components/SetCounter";
import {NewCounter} from "./Components/NewCounter";

function App() {
   /* let minValue = 0
    let maxValue = 10*/

    const [valueOnSet, setValueOnSet] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    let minValue = startValue
    let maxValue = valueOnSet
    const [counter, setCounter] = useState<number>(minValue)

    const disabling = startValue<0 || valueOnSet<0 ||startValue >= valueOnSet
    /*    useEffect(() => {
            let valueAsString = localStorage.getItem("value")
            if (valueAsString) {
                let newValue = JSON.parse(valueAsString)
                setCounter(newValue)

            }
        }, [])
        useEffect(() => {
            localStorage.setItem("value", JSON.stringify(counter))
        }, [counter])*/

    // const plus = () => {
    //     setCounter(counter + 1)
    // }
    // const zero = () => {
    //     setCounter(minValue)
    // }
    // const setLocal = () =>{
    //     localStorage.setItem("value", JSON.stringify(counter))
    //     localStorage.setItem("value+1", JSON.stringify(counter))
    // }
    // const getLocal = () => {
    //     let valueAsString = localStorage.getItem("value")
    //    if(valueAsString){
    //        let newValue = JSON.parse(valueAsString)
    //        setCounter(newValue)
    //    }
    // }
    // const clearLocal = ()=>{
    //    localStorage.clear()
    //   setCounter(0)
    // }
    // const deleteItemLocal=()=>{
    //     localStorage.removeItem("value+1")
    // }

    return (
        <div className="wrapper">
            <SetCounter valueOnSet={valueOnSet}
                        setValueOnSet={setValueOnSet}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        minValue={minValue}
                        maxValue={maxValue}
                        engine={counter}
                        setCounter={setCounter }
                        disabling={disabling}
            />
            <NewCounter engine={counter}
                        setCounter={setCounter}
                        minValue={minValue}
                        maxValue={maxValue}
                        disabling={disabling}
            />
        </div>
    );
}

export default App;
/*
<div className={counter > 4 ? "error" : "wrapper"}>*/
