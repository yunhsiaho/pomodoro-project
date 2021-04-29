import React, {useState} from "react";
import Pomodoro from "./pomodoro.js";
import BreakInterval from "./breakInterval";
import WorkInterval from "./workInterval";
import Reset from "./reset";
import ModalApp from "./modal";
import RepeatBreak from "./repeatBreak"

const main = () => {
    const [state, setState] = useState({
        breakTime:5,
        workTime:25,
        isBreak:false,
        seconds:0,
        minutes:25,
        isReset:false,
        displayMessage:false,
        start:true,
        repeatBreak:1,
    })
    return (
        <div>
            <Pomodoro setState={(newState)=>setState(newState)} state={state}/>
            <WorkInterval setState={(newState)=>setState(newState)} state={state} />
            <BreakInterval setState={(newState)=>setState(newState)} state={state}/>
            <ModalApp setState={(newState)=>setState(newState)} state={state}/>
            <RepeatBreak setState={(newState)=>setState(newState)} state={state}/>
            <Reset  setState={(newState)=>setState(newState)} state={state}/>
        </div>
    )
}

export default main
