

import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"


export default function Base() {

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(() => {
        return JSON.parse(localStorage.getItem("currentUser" || "null"));
    });
    const isAdmin = currentUser?.role === "admin";

    const handleLogout = () => {
        localStorage.removeItem(currentUser);
        setCurrentUser(null);
        navigate("/");
    }

    useEffect(() => {
        const handleStorageChange = () => {
            setCurrentUser(JSON.parse(localStorage.getItem("currentUser") || "null"));

        };

        window.addEventListener("userLogin", handleStorageChange);
        window.addEventListener("stored", handleStorageChange);

        return () => {

            window.removeEventListener("userLogin", handleStorageChange);
            window.removeEventListener("stored", handleStorageChange);
        }
    })


    return (
        <>
            <div style={{ textAlign: "center" }}>
                {/* Navbar */}
                <h1 style={{ backgroundColor: "lightgray" }}>BookStore App</h1>

                <nav style={{ padding: "0px" }}>
                    {!currentUser && (
                        <>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                    )}

                    {currentUser && (
                        <>
                            {isAdmin && (<Link to="">Register Book</Link>)}
                            <h3>Welcome, {currentUser.uname}</h3>
                            <br /><br />
                            <Link to="">MyCart</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    )}
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

