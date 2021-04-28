import React, {useState} from 'react';


export default function Reset({setState, state}){
    const {workTime,breakTime} = state;
    const reset =()=>{
        console.log("reset!");
        setState({
            // isBreak:true,
            // seconds:0,
            breakTime:breakTime,
            workTime:workTime,
            minutes:workTime
        })
    }
    return <div className="resetBtn">
        <button onClick={reset}>reset</button>
    </div>
}

// [state, setState] = useState({
//     breakTime:1,
//     workTime:0,
//     isBreak:false,
//     seconds:5,
//     minutes:3
// })