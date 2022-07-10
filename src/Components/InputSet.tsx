import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {installingMaxDataAC, toggleBoardAC} from "./counterReducer";

type PropsType = {
    valueOnSet: number
    //setValueOnSet: (valueOnSet: number)=>void
    disabling:boolean
    blueBoard: boolean
   // setBlueBoard: (blueBoard: boolean) => void

}

export const InputSet = (props: PropsType) => {

    const dispatch = useDispatch()
    const onchangeHandler =(e: ChangeEvent<HTMLInputElement>) =>{
      //  props.setValueOnSet(JSON.parse(e.currentTarget.value))
        //dispatch(toggleBoardAC(true));
        dispatch(installingMaxDataAC(JSON.parse(e.currentTarget.value)))
       // props.setBlueBoard(true)

    }
    return (
        <div>
            <input className={props.disabling ?"errorInputStyle":"inputStyle" } type="number" value={props.valueOnSet} onChange={onchangeHandler}/>

        </div>
    );
};

