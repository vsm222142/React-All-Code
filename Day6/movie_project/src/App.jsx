
import './App.css'
import Product from './components/Product'
import ProductDetail from './components/ProductDetails';
import { Outlet } from 'react-router-dom';


function App() {
  

  return (
    <>
     {/* <Product/> */}
     <Outlet/>
    </> 
  )
}

export default App
