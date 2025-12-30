import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <h1>User Login</h1>

            <form>
                <input type="email" placeholder='Enter Email :' /> <br /><br />
                <input type="password" placeholder='Enter Password :' /> <br /><br />

                <button>Register</button>
                <button>Cancel</button>
                <h4>If already having acount then <Link to="/Register">Register</Link> </h4>

            </form>

        </>
    )
}
