import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './components/Product.jsx';
import ProductDetails from './components/ProductDetails.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '', element: <Product /> },
      { path: 'productdetails/:id', element: <ProductDetails /> }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} >
      <App />
    </RouterProvider>

  </StrictMode>,
)
