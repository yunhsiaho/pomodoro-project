import React, {useState} from "react";
import Pomodoro from "./pomodoro.js";
import BreakInterval from "./breakInterval";
import WorkInterval from "./workInterval";
import Reset from "./reset";
import ModalApp from "./modal";

const main = () => {
    const [state, setState] = useState({
        breakTime:1,
        workTime:2,
        isBreak:false,
        seconds:5,
        minutes:3,
        isReset:false,//!!!!!!!!!!!!!
        displayMessage:false,
        start:true
    })
    return (
        <div>
            <Pomodoro setState={(newState)=>setState(newState)} state={state}/>
            <BreakInterval setState={(newState)=>setState(newState)} state={state}/>
            <WorkInterval setState={(newState)=>setState(newState)} state={state} />
            <Reset  setState={(newState)=>setState(newState)} state={state}/>
            <ModalApp setState={(newState)=>setState(newState)} state={state}/>
        </div>
    )
}

export default main
