import React, {useState} from 'react';


export default function Reset({setState, state}){
    const {workTime,breakTime} = state;
    const reset =()=>{
        setState({
            ...state,
            breakTime:breakTime,
            workTime:workTime,
            isBreak:false,
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