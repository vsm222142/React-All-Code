

import {useRef} from "react";

export default function RefDemo(){

    const ref=useRef(0);
    function handleClick()
    {
        ref.current=ref.current+1;
        alert("You Clicked "+ref.current+ "times! ");

    }

    return(
        <>
        <button onClick={handleClick}>Click me</button>
        </>
    )
}