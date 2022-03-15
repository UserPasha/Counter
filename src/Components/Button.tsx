import React from 'react';

type PropsType = {
    name: string
    callback: ()=> void
    disabled: boolean
}

export const Button = (props: PropsType) => {
    const buttonHandler =()=>{
        props.callback()
    }

    return (
        <button onClick={buttonHandler} disabled={props.disabled}>{props.name}</button>
    );
};

