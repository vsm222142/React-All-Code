import { useEffect, useState } from "react";

const StopWatch=()=>{
   const [time,setTime]=useState(0);

   const [running,setRunnig]=useState(false);

   const [paused,setPaused]=useState(false);

   useEffect(()=>{
    let interval;
    if(running && !paused)
        {
        interval=setInterval(
            ()=>{
                setTime((time)=>time+1)

            },1000
        )
    }
    return ()=>clearInterval(interval)
   },[running,paused])

   // Start stopwatch from 0 

   const handleStart =()=>{
    setTime(0);
    setRunnig(true);
    setPaused(false);
   }

   //  stopwatch

   const handleStop= ()=>{

    setTime(0)
    setRunnig(false)
    setPaused(false);

   }

   // Pause stopwatch 

   const handlePause= ()=>{
    setPaused(true);

   }

   //Resume 
   const handleResume=()=>{
    setPaused(false)
   }



    return(
        <>
        <h1>StopWatch</h1>
        <h2>{time} seconds</h2>
        <button onClick={handleStart}>Start</button> &nbsp;&nbsp;
            <button onClick={handleStop}>Stop</button> &nbsp;&nbsp;
                <button onClick={handlePause} disabled={!running}>Pause</button> &nbsp;&nbsp;
                <button onClick={handleResume} disabled={!paused}>Resume</button> &nbsp;&nbsp;


        </>
    )
}

export default StopWatch;