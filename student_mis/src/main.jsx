  import { StrictMode } from "react"
  import { createRoot, createElement } from "react-dom/client"
  import React from 'react';
  import './index.css'
  import App, { Examples } from './App.jsx'

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )