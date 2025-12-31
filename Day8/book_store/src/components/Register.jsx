import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    {
      uname: "", uemail: "", upass: "", ucpass: "", role: "user"
    }
  )

  const [errors, setErrors] = useState({});
  const [isAdminTaken, setIsAdminTaken] = useState(false);

  // check if admin already exists .

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const adminExits = users.some((u) => u.role === "admin");
    setIsAdminTaken(adminExits);
  })
  

  const validate = () => {
    const newErrors = {};
    if (!formData.uname) newErrors.uname = "Name is required";
    if (!formData.uemail) newErrors.uemail = "Email is required";
    if (!formData.upass) newErrors.upass = "Password is required";
    if (!formData.ucpass) newErrors.ucpass = "Confirm Password is required ";
    if (formData.upass !== formData.ucpass) newErrors.ucpass = "Password and Confirm Password does not match ";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (formData.role === "admin" && isAdminTaken) {
      alert("Admin already exists ! only one admin is allowed ");
      return;
    }
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  }

  return (
    <>
      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name='uname' onChange={handleChange} placeholder='Enter Name : ' />
        {errors.uname && <p>{errors.uname}</p>}
        <br /><br />
        <input type="email" name='uemail' onChange={handleChange} placeholder='Enter Email :' />
        {errors.uemail && <p>{errors.uemail}</p>}<br /><br />
        <input type="password" name='upass' onChange={handleChange} placeholder='Enter Password :' />
        {errors.upass && <p>{errors.upass}</p>}
        <br /><br />
        <input type="password" name='ucpass' onChange={handleChange} placeholder='Enter Confirm Password :' /> <br /><br />
        {errors.ucpass && <p>{errors.ucpass}</p>}
        <label >Select Role</label>
        <select name='role' value={formData.role} onChange={handleChange} >
          <option value="user">User</option>
          {!isAdminTaken && <option value="admin">Admin</option>}
        </select>  <br /><br />
        <button type='submit'>Register</button>
        <button>Cancel</button>
        <h4>If already having acount then <Link to="/login">Login</Link> </h4>

      </form>

    </>
  )
}
