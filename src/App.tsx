import React, {useEffect, useState} from 'react';

import './App.css';
import {SettingCounter} from "./Components/SettingCounter";
import {NewCounter} from "./Components/NewCounter";
import {useSelector} from 'react-redux/es/hooks/useSelector';
import {AppStoreType} from "./Components/store";


function App() {
    const valueOnSet = useSelector<AppStoreType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStoreType, number>(state => state.counter.minValue)
    const blueBoard = useSelector<AppStoreType, boolean>(state => state.counter.blueBoard)
    const counter = useSelector<AppStoreType, number>(state => state.counter.counter)

    // const [valueOnSet, setValueOnSet] = useState<number>(0)
    //const [startValue, setStartValue] = useState<number>(0)
    // let maxValue = valueOnSet
   // let minValue = startValue
    //const [counter, setCounter] = useState<number>(minValue)
    //const [blueBoard, setBlueBoard] = useState<boolean>(true)

    const disabling = startValue === 0 && valueOnSet === 0 ? true : startValue < 0 || valueOnSet < 0 || startValue >= valueOnSet


    // useEffect(() => {
    //     let minValueAsString = localStorage.getItem("minValue")
    //     let maxValueAsString = localStorage.getItem("maxValue")
    //     if (minValueAsString &&  maxValueAsString) {
    //         setStartValue(+minValueAsString);
    //         setValueOnSet(Number(maxValueAsString))
    //     }
    // }, [])


    return (
        <div className="wrapper">
            <SettingCounter valueOnSet={valueOnSet}
                            counter={counter}
                //  setValueOnSet={setValueOnSet}
                            startValue={startValue}
                // setStartValue={setStartValue}
                           // minValue={minValue}
                           // maxValue={maxValue}
                // engine={startValue}
                // setCounter={setCounter}
                            disabling={disabling}
                            blueBoard={blueBoard}
                           // setBlueBoard={setBlueBoard}
            />
            <NewCounter engine={counter}
                //setCounter={setCounter}
               // minValue={minValue}
               // maxValue={maxValue}
                disabling={disabling}
                blueBoard={blueBoard}
                startValue={startValue}
                valueOnSet={valueOnSet}
            />
        </div>
    );
}

export default App;

