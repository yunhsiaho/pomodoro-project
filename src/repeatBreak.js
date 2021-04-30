import React, {useState} from 'react';

export default function RepeatBreak({setState, state}){
    const name = "Repeat";
    const {repeatBreak} = state;
    const decreNum = ()=>{
        if(repeatBreak>1){
            setState({
                ...state, 
                repeatBreak:repeatBreak-1
            });
        }else{
            setState({
                ...state, 
                repeatBreak:1
            });
        }
    }
    const increNum = ()=>{
        setState({
            ...state, 
            repeatBreak:repeatBreak+1
        });
    }

    return(
        <div className="repeatBreak interval col-4">
            <h1>{name}</h1>    
            <div className="row d-flex justify-content-center">
            <button className="button col-2 m-1" onClick={decreNum}>-</button>
            <p className="col-6 m-1">{repeatBreak}</p>
            <button className="button col-2 m-1" onClick={increNum}>+</button>
            </div>
        </div>
    );
}