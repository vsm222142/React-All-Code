import UseStateDemo from './components/UseStateDemo';

import './App.css'
import ReducerDemo from './components/ReducerDemo';
import RefDemo from './components/RefDemo';
import ParamDeemo from './components/ParamDemo';
import EffectDemo from './components/EffectDemo';
import StopWatch from './components/StopWatch';
import StateDemo2 from './components/StateDemo2';
import { ContextDemo, ThemeButton } from './components/ContextDemo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home,About} from "./components/Navigate";
import Memo from './components/Memo';
function App() {


  return (
    <>
      {/* <UseStateDemo/> */}
      {/* <ReducerDemo/>

    <RefDemo/> */}
      {/* <ParamDeemo />
      <EffectDemo />
      <StopWatch/> */}
      {/* <StateDemo2 />

     <ContextDemo>
      <ThemeButton/>
     </ContextDemo> */}

     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/about" element={<About/>}/>

   
    
      </Routes>
      </BrowserRouter>
      <Memo/>
      
    </>
    
  )
}

export default App
