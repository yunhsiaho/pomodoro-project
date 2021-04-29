import React, {useState} from 'react';


export default function Reset({setState, state}){
    const {workTime,breakTime,isReset} = state;
    const reset =()=>{
        console.log("reset!");
        setState({
            isBreak:false,
            seconds:0,
            breakTime:breakTime,
            workTime:workTime,
            minutes:workTime,
            isReset:true
        })
    }
    return <div className="resetBtn">
        <button onClick={()=>{reset()}}>reset</button>
    </div>
}
//FIXMEAHHHHHHHHH RESET
// [state, setState] = useState({
//     breakTime:1,
//     workTime:0,
//     isBreak:false,
//     seconds:5,
//     minutes:3
// })