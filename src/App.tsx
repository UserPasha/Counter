import React, {useEffect, useState} from 'react';

import './App.css';
import {SettingCounter} from "./Components/SettingCounter";
import {NewCounter} from "./Components/NewCounter";

function App() {


    const [valueOnSet, setValueOnSet] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    let minValue = startValue
    let maxValue = valueOnSet
    const [counter, setCounter] = useState<number>(minValue)

    const [blueBoard, setBlueBoard]=useState<boolean>(true)


    const disabling = startValue < 0 || valueOnSet < 0 || startValue >= valueOnSet


    useEffect(() => {
        let minValueAsString = localStorage.getItem("minValue")
        if (minValueAsString) {
            let newValue = JSON.parse(minValueAsString)
            setStartValue(newValue);
        }
    }, [])
    useEffect(() => {
        let maxValueAsString = localStorage.getItem("maxValue")
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setValueOnSet(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("minValue", JSON.stringify(minValue));
        localStorage.setItem("maxValue", JSON.stringify(maxValue));
    }, [minValue, maxValue])

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
            <SettingCounter valueOnSet={valueOnSet}
                            setValueOnSet={setValueOnSet}
                            startValue={startValue}
                            setStartValue={setStartValue}
                            minValue={minValue}
                            maxValue={maxValue}
                            engine={counter}
                            setCounter={setCounter}
                            disabling={disabling}
                            blueBoard={blueBoard}
                            setBlueBoard={setBlueBoard}
            />
            <NewCounter engine={counter}
                        setCounter={setCounter}
                        minValue={minValue}
                        maxValue={maxValue}
                        disabling={disabling}
                        blueBoard={blueBoard}

            />
        </div>
    );
}

export default App;
/*
<div className={counter > 4 ? "error" : "wrapper"}>*/
