import { useState } from "react";
export default function Home() {


    const [isLogin, setIsLogout] = useState(false);  // hook-useState()
    return (
        <>
            <div>
                <h1>Home Page</h1>

                {isLogin && <p> You are Logged in</p>}
                <button onClick={() => setIsLogout(!isLogin)}>
                    {isLogin ? "Logout" : "Login"}
                </button>
            </div>-
        </>
    )  
}