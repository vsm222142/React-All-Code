import { useState } from "react";

export default function UseStateDemo(){
    const [count,setCount]=useState(0);
   
    // const handleCountevent = ()=> {
    //     const newCount= count+1;
    //     setCount(newCount)
    // }

    return (
        <>
          <button onClick={()=>setCount(count+1)}>You press me {count} times</button>
        
        </>
    )
}