import React from 'react';
import {Board} from "./Board";
import {Button} from "./Button";

type PropsType = {
    engine: number
    setCounter: (engine: number) => void
    maxValue: number
    minValue:number
    disabling: boolean
}

export const NewCounter = (props: PropsType) => {
    const Incrementing = () => {
        props.setCounter(props.engine + 1)
    }
    const resetValue = () => {
        props.setCounter(props.minValue)
    }
    const disableForInc = props.engine>props.maxValue-1
    const disableForRes = props.engine===props.minValue


    return (
        <div  className="container">
            <div className="board">
                <Board engine={props.engine} maxValue={props.maxValue} disabling={props.disabling}/>
                {/* <div className="counterField">
                {counter}
            </div>*/}

            </div>
            <div className="buttons">
                <Button name="inc" callback={Incrementing} disabled={disableForInc}/>
                <Button name="reset" callback={resetValue} disabled={disableForRes}/>
                {/* <button onClick={plus} disabled={counter > 4}>+</button>
                <button onClick={zero} disabled={counter === 0}>0</button>*/}
                {/*    <button onClick={setLocal}>set</button>
                    <button onClick={getLocal}>get</button>
                    <button onClick={clearLocal}>clear</button>
                    <button onClick={deleteItemLocal}>deleteItem</button>*/}
            </div>
        </div>
    );
};

