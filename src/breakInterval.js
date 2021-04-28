import React, {useState} from 'react';

export default function BreakInterval(){
    const name = "Break Time";
    const [breakInterval, setBreakInterval] = useState(5);

    const decreNum = ()=>{
        if(breakInterval>1){
            setBreakInterval(breakInterval-1);
        }else{
            setBreakInterval(1);
        }
    }
    const increNum = ()=>{
        setBreakInterval(breakInterval+1);
    }

    return(
        <div className="breakInterval">
            <h1>{name}</h1>
            <p>{breakInterval}</p>
            <button onClick={decreNum}>-</button>
            <button onClick={increNum}>+</button>
        </div>
    );
}




