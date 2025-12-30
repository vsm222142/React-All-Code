import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import Base from './components/Base.jsx';
import { Home } from './components/Home.jsx';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Base/>,
    children:[
      {index:true,element:<Home/>},
      {path:"register",element:<Register/>},
      {path:"login",element:<Login/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routes}/>
  </StrictMode>,
)
