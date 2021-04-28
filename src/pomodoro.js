import React, {useState, useEffect} from "react";
import {breakInterval} from "./breakInterval";
import {workInterval} from "./workInterval";


export default function Pomodoro({setState, state}){
    const {workTime, seconds, breakTime, isBreak, minutes} = state;
    const[displayMessage, setDisplayMessage] = useState(false);
    const[start,setStart] = useState(true);
    const [pauseBtn,setpauseBtn] = useState(false);


    const timer = ()=> {
        let interval = setInterval(() => {
            clearInterval(interval);
            if(pauseBtn==true){
                setpauseBtn(false);
                return;
            }
            if(seconds!=0){
                setState({
                    ...state, 
                    seconds:seconds-1,
                        })
                        return;
            }
            if(workTime!==0){
                setState({
                    ...state, 
                    seconds:59,
                    minutes:minutes-1
                })
                return;
            }
            if(isBreak){
                setState({
                    ...state,
                    minutes:minutes,
                    isBreak:false
                })
                return;
            }
            console.log("time over");

            setState({
                ...state, 
                minutes:Number(breakTime),
                isBreak:true
                    })
            setDisplayMessage(!displayMessage);        
        }, 1000)
    }
    useEffect(()=>{
        if(start){
            setStart(false);
            return;
        }
            timer()
        }, [seconds,isBreak])



    const timerMinutes = minutes < 10 ? `0${minutes}` : workTime;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return <div className="pomodoro">
                <button onClick={timer}>start</button>
                <button onClick={()=>setpauseBtn(true)}>pause</button>
    <div className="message">
        {displayMessage ?  <div> Break Time</div>: <div> Working Time</div>}
    </div>
    <div className="timer">
        {timerMinutes}:{timerSeconds}
    </div>
    </div>
    }


        // 