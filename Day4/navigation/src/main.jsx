import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Base from './component/Base';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Base/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/contact",element:<Contact/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routes}/>
  </StrictMode>,
)
