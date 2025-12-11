import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Greetings from './Greetings.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <Greetings/>
  </StrictMode>,
)
