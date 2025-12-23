
import { useLocation,useNavigate } from "react-router-dom";

function Home(){

    const navigate=useNavigate();
    const location=useLocation();
    return(
        <>
        <h2>Home Page</h2>
        <p>Came From : {location.state?.from || "/"} </p>
        <button onClick={()=>navigate('/about',{state:{from:"home"}})}>Go to About page</button>
        </>
    )
}

function About(){

        const navigate=useNavigate();
    const location=useLocation();
    return (

        <>
        <h2> About page</h2>
        <p>Came From : {location.state?.from || "unknown"} </p>
        <button onClick={()=>navigate(-1)}>Go to Home Page </button>
        </>
    )
}

export {Home,About};