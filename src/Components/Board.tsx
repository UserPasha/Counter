import React from 'react';

type PropsType = {
    engine: number
    maxValue: number
}

export const Board = (props: PropsType) => {
    return (
        <div className={props.engine>props.maxValue-1 ? "error" :"dataOnBoard"}>
            {props.engine}
        </div>
    );
};

