
import React from "react";
import {BrowserRouter,Routes,Route,Link,useParams} from "react-router-dom";

function Student(){
    const{id}= useParams();

    return(
        <>
           <div>
            <h2>Student Details</h2>
            <p>Student id :{id} </p>
        </div>
        </>
    )
}


export default function ParamDemo(){
    return (
        <>
       <BrowserRouter>
       <h1>UseParams Example</h1>
       <nav>
        <Link to="/student/101">Student 101</Link>
        <Link to="/student/102">Student 102</Link>
       </nav>
       <Routes>
        <Route path="/student/:id" element={<Student/>}>
        </Route>

       </Routes>
       </BrowserRouter>
        </>
    )
}