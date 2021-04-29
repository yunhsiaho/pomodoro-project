import React, {useState} from 'react';

export default function RepeatBreak({setState, state}){
    const name = "Repeat Session";
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
        <div className="repeatBreak">
            <h1>{name}</h1>    
            <img className="tomato-head" src={require('./tomato-head.gif')} alt="loading..." />        
            <div className="btnSet">
            <button className="button" onClick={decreNum}>-</button>
            <p>{repeatBreak}</p>
            <button className="button" onClick={increNum}>+</button>
            </div>
        </div>
    );
}