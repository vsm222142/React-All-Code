import { useState } from "react";



const StateDemo2=()=>{

const [text,setText]=useState("");

const [gender,setGender]=useState("");
const [course,setCourse]=useState("");

    return (
        <>
        <div>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <p>You typed : {text} </p>
            <br /><br />

            <label> Select Gender</label>
            <input type="radio" name="gender" value="Male" checked={gender=="Male"} onChange={(e)=>{setGender(e.target.value)}} />
            <label >Male</label>
            <input type="radio" name="gender" value="Female" checked={gender=="Female"} onChange={(e)=>{setGender(e.target.value)}} />
            <label> Female</label>
            <p>You selected : You selected : {gender || "None"} </p>
            <br /><br />

            <select value={course} onChange={(e)=>setCourse(e.target.value)}>
                <option value="">-----</option>
                <option value="java">Java</option>
                <option value="React">React</option>
                <option value="Python">Python</option>
            </select>
            <p>You Selected Course name : {course || "None"} </p>
        </div>
        </>
    )
}

export default StateDemo2;