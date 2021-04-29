import React, {useState} from 'react';


export default function Reset({setState, state}){
    const {workTime,breakTime,isReset,repeatBreak} = state;
    const reset =()=>{
        console.log("reset!");
        setState({
            isBreak:false,
            seconds:0,
            breakTime:breakTime,
            workTime:workTime,
            minutes:workTime,
            isReset:true,
            repeatBreak:1
        })
    }
    return <div className="resetBtn">
        <button  onClick={()=>{reset()}}>reset</button>
    </div>
}
