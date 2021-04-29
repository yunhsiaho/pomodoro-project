import React, {useState} from 'react';

export default function WorkInterval({setState, state}){
    const name = "Work Time";
    const {workTime} = state;
    // console.log(workTime);
    const decreNum = ()=>{
        if(workTime>1){
            setState({
                ...state, 
                workTime:workTime-1
            });
        }else{
            setState({
                ...state, 
                workTime:1
            });
        }
    }
    const increNum = ()=>{
        setState({
            ...state, 
            workTime:workTime+1
        });
    }

    return(
        <div className="workInterval">
            <h1>{name}</h1>
            <img className="tomato-head" src={require('./tomato-head.gif')} alt="loading..." />
            <div className="btnSet">
            <button className="button" onClick={decreNum}>-</button>
            <p>{workTime}</p>
            <button className="button" onClick={increNum}>+</button>
            </div>
        </div>
    );
}




