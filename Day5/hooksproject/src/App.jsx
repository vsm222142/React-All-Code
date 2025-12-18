import UseStateDemo from './components/UseStateDemo';

import './App.css'
import ReducerDemo from './components/ReducerDemo';
import RefDemo from './components/RefDemo';
import ParamDeemo from './components/ParamDemo';
import EffectDemo from './components/EffectDemo';
import StopWatch from './components/StopWatch';
import StateDemo2 from './components/StateDemo2';
import { ContextDemo, ThemeButton } from './components/ContextDemo';

function App() {


  return (
    <>
      {/* <UseStateDemo/> */}
      {/* <ReducerDemo/>

    <RefDemo/> */}
      {/* <ParamDeemo />
      <EffectDemo />
      <StopWatch/> */}
      <StateDemo2 />

     <ContextDemo>
      <ThemeButton/>
     </ContextDemo>
      
    </>
  )
}

export default App
