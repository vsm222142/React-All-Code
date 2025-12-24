
import './App.css'
import Product from './components/Product'
import ProductDetail from './components/ProductDetails';
import { Outlet } from 'react-router-dom';
import Register from './components/Register';
import Movie from './components/Movie';


function App() {
  
 
  return (
    <>
     {/* <Product/> */}
     {/* <Outlet/> */}
     {/* <Register/> */}
     <Movie/>
    </> 
  )
}

export default App
