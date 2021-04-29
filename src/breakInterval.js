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
        <div className="breakInterval">
            <h1>{name}</h1>
            <div className="btnSet">
            <button className="button" onClick={decreNum}>-</button>
            <p>{breakTime}</p>
            <button className="button" onClick={increNum}>+</button>
            </div>
        </div>
    );
}