

import { Link, NavLink, Outlet } from "react-router-dom"


export default function Base() {


    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ backgroundColor: "lightgray" }}>BookStore App</h1>

                <nav style={{padding:"0px"}}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>

            </div>

            <main>
                <Outlet />

            </main>
            <footer style={{ backgroundColor: "lightgray" }}>
                <h3 style={{ margin: 0, bottom: 0, position: "fixed", textAlign: "center", width: "100%" }}>@Copyright BookStore 2025-26</h3>
            </footer>
        </>
    )
}

