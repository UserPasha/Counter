import React from 'react';
import {Button} from "./Button";
import {InputSet} from "./InputSet";

type PropsType = {
    valueOnSet: number
    setValueOnSet:(valueOnSet: number)=> void
    startValue: number
    setStartValue: (startValue: number)=>void
    maxValue: number
    minValue:number
    engine: number
    setCounter: (engine: number) => void
    disabling: boolean
}

export const SetCounter = (props: PropsType) => {
    const test = () => {
        if (props.startValue) {
            let startToCounting = props.startValue
            props.setStartValue(startToCounting)
            props.setCounter(props.startValue)
        }
        if (props.valueOnSet) {
            let maxToCounting = props.valueOnSet
            props.setValueOnSet(maxToCounting)
        }
    }
    // const disabling = props.startValue<0 || props.valueOnSet<0 || props.startValue >= props.valueOnSet

    return (
        <div className="container">
            <div className="board">
                <div className="inputWrapper">
                    <div className="inputData">
                        <div className="text">
                            max. value
                        </div>
                        <InputSet  valueOnSet={props.valueOnSet} setValueOnSet={props.setValueOnSet} disabling={props.disabling}/>
                    </div>
                    <div className="inputData">
                        <div className="text">
                            start. value
                        </div>
                        <InputSet  valueOnSet={props.startValue} setValueOnSet={props.setStartValue} disabling={props.disabling}/>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Button name="set" callback={test}
                        disabled={props.disabling}
                />

            </div>
        </div>
    );
};

