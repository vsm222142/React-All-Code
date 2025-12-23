import { useEffect, useState } from "react"

export default function EffectDemo() {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 500)
    // })


    useEffect(() => {
        console.log("Count change to : ", count);
    })
    useEffect(()=>{
        console.log("Component mounted");

        return ()=>{
            console.log("Componet unmounted");
        } 
    },[]);
    return (
        <>
            <h1>I have rendered {count} times</h1>

            <h1>Count : {count}</h1>

            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>

        </>
    )
}