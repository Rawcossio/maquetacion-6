import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MaquetacionSeis from './MaquetacionSeis'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaquetacionSeis/>
  </StrictMode>,
)
