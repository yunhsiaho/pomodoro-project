import React, {useState, useEffect, useRef} from "react";
import {breakInterval} from "./breakInterval";
import {workInterval} from "./workInterval";


export default function Pomodoro({setState, state}){
    const {workTime, seconds, breakTime, isBreak, minutes, isReset, displayMessage,start} = state;
    // const[displayMessage, setDisplayMessage] = useState(false);
    // const[start,setStart] = useState(true);
    const [pauseBtn,setpauseBtn] = useState(false);
    const beep = useRef();

    const timer = ()=> {
        // console.log("timer start")
        let interval = setInterval(() => {
            clearInterval(interval);
            // if(pauseBtn){
            //     console.log("pause");
            //     setpauseBtn(false);
            //     return;
            // }
            if(isReset){
                setState({
                    ...state,
                    isReset:false
                })
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
                beep.current.play();
                setState({
                    ...state,
                    minutes:workTime,//?????
                    isBreak:false,
                    displayMessage:false
                })
                // setDisplayMessage(!displayMessage);  
                return;
            }
            console.log("time over");
            beep.current.play();
            setState({
                ...state, 
                minutes:breakTime,
                isBreak:true,
                displayMessage:true
                    })
            // setDisplayMessage(!displayMessage);       
            console.log("end of the timer"); 
        }, 100)
    }
    useEffect(()=>{
        if(start){
            console.log("start in useeffect");
            setState({
                ...state, 
                start:false
                    })
            setpauseBtn(false);
            return;
        }
        if(pauseBtn){
            console.log("pause in useeffect");
            setpauseBtn(false);
            return;
        }
        console.log("enter timer in useeffect");
            timer()
        }, [seconds,isBreak])
//FIXME why there's a fucking pause when click start!?(pause pushed 2 times)


    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return <div className="pomodoro">
                <button onClick={timer}>start</button>
                <button onClick={()=>setpauseBtn(true)}>pause</button>
    <div className="message">
        {displayMessage ?  <div> Break Time</div>: <div> Working Time</div>}
        <audio
            id="beep"
            preload="auto"
            src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
            ref={beep}
        ></audio>
    </div>
    <div className="timer">
        {timerMinutes}:{timerSeconds}
    </div>
    </div>
    }


        // 