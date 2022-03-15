import React, {ChangeEvent, useState} from 'react';

type PropsType ={
    valueOnSet: number
    setValueOnSet: (valueOnSet: number)=>void
    disabling:boolean
}

export const InputSet = (props: PropsType) => {


    const onchangeHandler =(e: ChangeEvent<HTMLInputElement>) =>{
        props.setValueOnSet(JSON.parse(e.currentTarget.value))
    }
    return (
        <div>
            <input className={props.disabling ?"errorInputStyle":"inputStyle" } type="number" value={props.valueOnSet} onChange={onchangeHandler}/>

        </div>
    );
};

