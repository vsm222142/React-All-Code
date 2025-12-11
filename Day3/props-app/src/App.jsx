
import './App.css';
import Books from './components/Books.jsx';
import Author from "./components/Author.jsx"

function App() {

  const x={title:"React",author:"wolke",Price:1000};
  const y=["macgraw","techneo","techmax"];


  return (
    <> 
     {/* <Books title="Python"/>
     <Books title='Js' author="Eich" price={900} /> */}

     <Books bookinfo={x} publisher={y}/>
     <Author/>
    </>
  )
}

export default App
