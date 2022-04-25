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

    const [blueBoard, setBlueBoard] = useState<boolean>(true)

    const disabling = startValue === 0 && valueOnSet === 0 ? false : startValue < 0 || valueOnSet < 0 || startValue >= valueOnSet


    useEffect(() => {
        let minValueAsString = localStorage.getItem("minValue")
        let maxValueAsString = localStorage.getItem("maxValue")
        if (minValueAsString &&  maxValueAsString) {
            setStartValue(+minValueAsString);
            setValueOnSet(Number(maxValueAsString))
        }
    }, [])
    


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

