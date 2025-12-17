import { useEffect, useState } from "react"

export default function EffectDemo(){

    const [count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
    },500)
})
    return(
        <>
        <h1>I have rendered {count} times</h1>
        
        </>
    )
}