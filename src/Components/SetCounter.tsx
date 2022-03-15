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
}

export const SetCounter = (props: PropsType) => {
    const test = () =>{
        if(props.startValue){
         let startToCounting = props.startValue
            props.setStartValue(startToCounting)
        }
            if(props.valueOnSet){
            let maxToCounting = props.valueOnSet
                props.setValueOnSet(maxToCounting)

            }
        console.log(props.valueOnSet)
    }
    const disabling = props.startValue<0 || props.valueOnSet<0

    return (
        <div className="container">
            <div className="board">
                <div className="inputWrapper">
                    <div className="inputData">
                        <div className="text">
                            max. value
                        </div>
                        <InputSet  valueOnSet={props.valueOnSet} setValueOnSet={props.setValueOnSet}/>
                    </div>
                    <div className="inputData">
                        <div className="text">
                            start. value
                        </div>
                        <InputSet  valueOnSet={props.startValue} setValueOnSet={props.setStartValue}/>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Button name="set" callback={test}
                        disabled={disabling}
                />

            </div>
        </div>
    );
};

