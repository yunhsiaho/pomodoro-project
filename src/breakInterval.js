import React, {useState} from 'react';

export default function BreakInterval({setState, state}){
    const name = "Break Time";
    const {breakTime} = state;
    const decreNum = ()=>{
        if(breakTime>1){
            setState({
                ...state, 
                breakTime:breakTime-1
            });
        }else{
            setState({
                ...state, 
                breakTime:1
            });
        }
    }
    const increNum = ()=>{
        setState({
            ...state, 
            breakTime:breakTime+1
        });
    }

    return(
        <div className="breakInterval interval col-4">
            <h1>{name}</h1>
            <div className="row d-flex justify-content-center">
            <button className="button col-2 m-1" onClick={decreNum}>-</button>
            <p className="col-6 m-1">{breakTime}</p>
            <button className="button col-2 m-1" onClick={increNum}>+</button>
            </div>
        </div>
    );
}