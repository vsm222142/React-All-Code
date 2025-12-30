import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <>
      <h1>User Registration</h1>

      <form>
<input type="text" placeholder='Enter Name : ' /><br /><br />
<input type="email" placeholder='Enter Email :' /> <br /><br />
<input type="password" placeholder='Enter Password :' /> <br /><br />
<input type="password" placeholder='Enter Confirm Password :' /> <br /><br />

<label >Select Role</label>
<select >
    <option value="">User</option>
    <option value="">Admin</option>
</select>  <br /><br />
<button>Register</button>
<button>Cancel</button>
<h4>If already having acount then <Link to="/login">Login</Link> </h4>

      </form>
    
    </>
  )
}
