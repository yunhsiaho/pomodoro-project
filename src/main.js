import React, {useState} from "react";
import Pomodoro from "./pomodoro.js";
import BreakInterval from "./breakInterval";
import WorkInterval from "./workInterval";
import ModalApp from "./modal";
import RepeatBreak from "./repeatBreak";

const Main = () => {
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
            <div>
            <ModalApp setState={(newState)=>setState(newState)} state={state}/>
        </div>
        <div className="container">
            <Pomodoro setState={(newState)=>setState(newState)} state={state}/>
                <div className="row">
                <WorkInterval setState={(newState)=>setState(newState)} state={state} />
                <BreakInterval setState={(newState)=>setState(newState)} state={state}/>
                <RepeatBreak setState={(newState)=>setState(newState)} state={state}/>
                </div>
            <div className='row d-flex justify-content-center'>
                <img  src={require('./tomato.gif')} />        
            </div>
        </div>
        </div>
    )
}

export default Main
