import React, {ChangeEvent, useState} from 'react';

type PropsType ={
    valueOnSet: number
    setValueOnSet: (valueOnSet: number)=>void
}

export const InputSet = (props: PropsType) => {


    const onchangeHandler =(e: ChangeEvent<HTMLInputElement>) =>{
        props.setValueOnSet(JSON.parse(e.currentTarget.value))
    }
    return (
        <div>
            <input className={props.valueOnSet<0 ?"errorInputStyle":"inputStyle" } type="number" value={props.valueOnSet} onChange={onchangeHandler}/>

        </div>
    );
};

