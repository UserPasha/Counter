import React from 'react';

type PropsType = {
    engine: number
    maxValue: number
    disabling: boolean
    blueBoard: boolean
}

export const Board = (props: PropsType) => {
    return (
        <>
            {props.disabling ? (
                <div className="errorMessage">
                    <div className="inError">
                        <h1>ERROR!</h1>
                        <h2>Enter correct data</h2>
                    </div>
                </div>
            ) : props.blueBoard ? (
                <div className="blueBoard">
                    <div className="inError">
                        <h2>Enter value and</h2>
                        <h1>press set</h1>
                    </div>
                </div>
            ) : (
                <div className={props.engine > props.maxValue - 1 ? "error" : "dataOnBoard"}>
                    {props.engine}
                </div>
            )}
        </>
    )


    // return (
    //     <div className="blueBoard"><div className="inError">
    //        <h2>Enter value and</h2>  <h1>press set</h1></div>
    //
    //     </div>
    // );


};

