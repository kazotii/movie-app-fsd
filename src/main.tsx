import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { MovieRouter } from './Router'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={MovieRouter} />
  </StrictMode>,
)