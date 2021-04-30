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
        <div className="workInterval interval col-4">
            <h1>{name}</h1>
            <div className="row d-flex justify-content-center">
                <button className="button col-2 m-1" onClick={decreNum}>-</button>
                <p className="col-6 m-1">{workTime}</p>
                <button className="button col-2 m-1" onClick={increNum}>+</button>
            </div>
        </div>

    );
}




