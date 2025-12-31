import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ uemail: "", upass: "" })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.uemail) newErrors.uemail = "Email is required";
        if (!formData.upass) newErrors.upass = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.uemail === formData.uemail && u.upass === formData.upass);

        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.dispatchEvent(new Event("userLogin"));
            alert("Login successfully!!!");
            navigate("/");


        } else {
            alert("Email or Password incorrect !");
        }
    }


    return (
        <>
            <h1>User Login</h1>

            <form onSubmit={handleSubmit}>
                <input type="email" name='uemail' onChange={handleChange} placeholder='Enter Email :' /> <br /><br />
                {errors.uemail && <p>{errors.uemail}</p>}
                <input type="password" name='upass' onChange={handleChange} placeholder='Enter Password :' /> <br /><br />
                {errors.upass && <p>{errors.upass}</p>}
                <button type='submit'>Login</button>
                <button>Cancel</button>
                <h4>If already having acount then <Link to="/Register">Register</Link> </h4>

            </form>

        </>
    )
}
