import React, {useState, useEffect, useRef} from "react";


export default function Pomodoro({setState, state}){
    const {workTime, seconds, breakTime, isBreak, minutes, isReset, displayMessage,start,repeatBreak} = state;
    const [pauseBtn,setpauseBtn] = useState(false);
    const beep = useRef();

    const timer = ()=> {
        let interval = setInterval(() => {
            clearInterval(interval);
            if(isReset){
                setState({
                    ...state,
                    isReset:false
                })
                return;
            }
            if(repeatBreak==0){
                beep.current.play();
                console.log("finish!");
                alert("Your pomodoro is finish");
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
                    displayMessage:false,
                    repeatBreak:repeatBreak-1
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
        }, 1000)
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
    
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return <div className="pomodoro">
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

    <div>
        <button onClick={timer}>start</button>
        <button onClick={()=>setpauseBtn(true)}>pause</button>
    </div>

    </div>
    }


        // 