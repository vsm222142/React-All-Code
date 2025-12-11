import { Link, Outlet } from "react-router-dom";
export default function Base() {
    return (
        <>
            {/* Navbar */}
            <div style={{ textAlign: "center", margin: "10px", padding: "10px", background: "lightgray", fontSize: "2rem" }}>
                <nav style={{ gap: "50px" }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>

            <main>
                <Outlet/>
            </main>

            {/* Footer */}
            <div style={{ textAlign: "center", fontSize: "2rem", bottom: 0, width: "100%", position: "fixed", backgroundColor: "grey" }}>
                <footer>&copy; Copyright 2025-26</footer>
            </div>
        </>
    )
}