// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from 'react-dom/client';

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const render = () => {
    document.getElementById("root1").innerHTML = `<div> <h1> Local-DOM <input>  <pre> ${new Date().toLocaleTimeString()} </pre></h1> </div> `;
    root2.render(<div> <h1>React-DOM <input></input> <pre>  {new Date().toLocaleTimeString()} </pre> </h1> </div>);
}

setInterval(render, 1000);
