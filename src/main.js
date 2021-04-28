import React, {useState} from "react";
import Pomodoro from "./pomodoro.js";
import BreakInterval from "./breakInterval";
import WorkInterval from "./workInterval";
import Reset from "./reset";


const main = () => {
    const [state, setState] = useState({
        breakTime:1,
        workTime:0,
        isBreak:false,
        seconds:5,
        minutes:3,
        isReset:false//!!!!!!!!!!!!!
    })
    return (
        <div>
            <Pomodoro setState={(newState)=>setState(newState)} state={state}/>
            <BreakInterval setState={(newState)=>setState(newState)} state={state}/>
            <WorkInterval setState={(newState)=>setState(newState)} state={state} />
            <Reset  setState={(newState)=>setState(newState)} state={state}/>
        </div>
    )
}

export default main
