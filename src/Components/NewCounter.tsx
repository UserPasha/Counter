import React from 'react';
import {Board} from "./Board";
import {Button} from "./Button";
import {useDispatch} from "react-redux";

import {incrementAC, resetAC} from "./counterReducer";

type PropsType = {
    engine: number
    //setCounter: (engine: number) => void
   // maxValue: number
   // minValue: number
    disabling: boolean
    blueBoard: boolean
    startValue: number
    valueOnSet:number
}

export const NewCounter = (props: PropsType) => {


    const dispatch = useDispatch()

    const Incrementing = () => {
        dispatch(incrementAC())
        //props.setCounter(props.engine + 1)
    }
    const resetValue = () => {
        dispatch(resetAC())
       // props.setCounter(props.minValue)
    }
    // const disableForInc = props.engine > props.maxValue - 1 || props.disabling || props.blueBoard
    // const disableForRes = props.engine === props.minValue || props.disabling || props.blueBoard

    const disableForInc = props.engine > props.valueOnSet - 1 || props.disabling || props.blueBoard
    const disableForRes =  props.engine === props.startValue ||props.disabling || props.blueBoard

    return (
        <div className="container">
            <div className="board">
                <Board minValue={props.startValue} maxValue={props.valueOnSet} disabling={props.disabling}
                       blueBoard={props.blueBoard} engine={props.engine}/>

            </div>
            <div className="buttons">
                <Button name="inc" callback={Incrementing} disabled={disableForInc}/>
                <Button name="reset" callback={resetValue} disabled={disableForRes}/>

            </div>
        </div>
    );
};

