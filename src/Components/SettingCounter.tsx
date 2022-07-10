import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {Button} from "./Button";
import {InputSet} from "./InputSet";
import {useDispatch} from "react-redux";
import {installingCountDataAC, installingMaxDataAC, installingMinDataAC, toggleBoardAC} from "./counterReducer";

type PropsType = {
    valueOnSet: number
    //setValueOnSet: (valueOnSet: number) => void
    startValue: number
    //setStartValue: (startValue: number) => void
    // maxValue: number
    //  minValue: number
    counter:number
    //setCounter: (engine: number) => void
    disabling: boolean
    blueBoard: boolean
    //setBlueBoard: (blueBoard: boolean) => void
}



export const SettingCounter = (props: PropsType) => {


    const dispatch = useDispatch()

    // console.log(props.startValue === 0 || props.valueOnSet)
    const install = () => {
        if (props.startValue === 0 || props.valueOnSet) {
            let startToCounting = props.startValue
            // props.setStartValue(startToCounting)
            // props.setCounter(props.startValue)
            dispatch(installingMinDataAC(startToCounting))
            dispatch(installingCountDataAC(startToCounting))
            let maxToCounting = props.valueOnSet
            dispatch(installingMaxDataAC(maxToCounting))
            // props.setValueOnSet(maxToCounting)
            dispatch(toggleBoardAC(false))
            //props.setBlueBoard(false)

            // localStorage.setItem("minValue", JSON.stringify(startToCounting));
            // localStorage.setItem("maxValue", JSON.stringify(maxToCounting));
        }
    }


    // const disabling = props.startValue<0 || props.valueOnSet<0 || props.startValue >= props.valueOnSet

    return (
        <div className="container">
            <div className="board">
                <div className="inputWrapper">
                    <div className="inputData">
                        <div className="text">
                            max.value
                        </div>
                        {/*<InputSet valueOnSet={props.valueOnSet}*/}
                        {/*         // setValueOnSet={props.setValueOnSet}*/}
                        {/*          disabling={props.disabling}*/}

                        {/*         // setBlueBoard={props.setBlueBoard}/>*/}
                        {/*          blueBoard={props.blueBoard}/>*/}
                        <input type="number" className={props.disabling ?"errorInputStyle":"inputStyle" }
                               value={props.valueOnSet} onChange={(e: ChangeEvent<HTMLInputElement>) =>{
                            dispatch(installingMaxDataAC(+e.currentTarget.value));
                            dispatch(toggleBoardAC(true))}}/>
                    </div>
                    <div className="inputData">
                        <div className="text">
                            start.value
                        </div>
                        {/*<InputSet valueOnSet={props.startValue}*/}
                        {/*          //setValueOnSet={props.setStartValue}*/}
                        {/*          disabling={props.disabling}*/}

                        {/*         // setBlueBoard={props.setBlueBoard}/>*/}
                        {/*          blueBoard={props.blueBoard}/>*/}
                        <input  type="number" className={props.disabling ?"errorInputStyle":"inputStyle" }
                               value={props.startValue} onChange={(e: ChangeEvent<HTMLInputElement>) =>{
                            dispatch(installingMinDataAC(+e.currentTarget.value))
                            dispatch(toggleBoardAC(true))}} />
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Button name="set" callback={install}
                        disabled={props.disabling}
                />

            </div>
        </div>
    );
};

