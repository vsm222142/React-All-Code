import { useState } from "react";
export default function Home() {

    const container={
        display:"flex",
        justifyContent:"center",
        width:"400px",
        height:"400px",
        flexDirection:"column",
        alignItem:"center",
        textAlign:"center",
        border:"2px solid blue",
        borderRadius:"10px",
        backgroundColor:"#e73e65",
        padding:"20px",
    }


    const [isLogin, setIsLogout] = useState(false);  // hook-useState()
    return (
        <>
        <center>
            <div style={container}>
                <h1>Home Page</h1>

                {isLogin && <p style={{fontSize:"20px",fontWeight:"bold"}}> You are Logged in</p>}
                <button style={{fontSize:"25px"}} onClick={() => setIsLogout(!isLogin)}>
                    {isLogin ? "Logout" : "Login"}
                </button>
            </div>
            </center>
        </>
    )  
}