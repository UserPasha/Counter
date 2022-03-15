import React from 'react';

type PropsType = {
    engine: number
    maxValue: number
    disabling: boolean
}

export const Board = (props: PropsType) => {
    return props.disabling ? <div className="errorMessage">ERROR</div> : (<div className={props.engine>props.maxValue-1 ? "error" :"dataOnBoard"}>
        {props.engine}
    </div>)


    // return (
    //     <div className={props.engine>props.maxValue-1 ? "error" :"dataOnBoard"}>
    //         {props.engine}
    //     </div>
    // );


};

