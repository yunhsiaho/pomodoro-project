import React, {useState, useEffect} from "react";
import {breakInterval} from "./breakInterval";
import {workInterval} from "./workInterval";


export default function Pomodoro({setState, state}){
    const {workTime, seconds, breakTime, isBreak, minutes} = state;
    const[displayMessage, setDisplayMessage] = useState(false);
    const[start,setStart] = useState(true);
    const [pauseBtn,setpauseBtn] = useState(false);


    const timer = ()=> {
        console.log("timer start")
        let interval = setInterval(() => {
            clearInterval(interval);
            if(pauseBtn==true){
                console.log("pause");
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
            if(minutes!==0){
                setState({
                    ...state, 
                    seconds:59,
                    minutes:minutes-1
                })
                return;
            }
            if(isBreak){
                console.log("break finish");
                setState({
                    ...state,
                    minutes:workTime,//?????
                    isBreak:false
                })
                return;
            }
            console.log("time over");

            setState({
                ...state, 
                minutes:breakTime,
                isBreak:true
                    })
            setDisplayMessage(!displayMessage);       
            console.log("end of the timer"); 
        }, 1000)
    }
    useEffect(()=>{
        if(start){
            setStart(false);
            return;
        }
        if(pauseBtn){
            return;
        }
        console.log("timer is working");
            timer()
        }, [seconds,isBreak])



    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
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