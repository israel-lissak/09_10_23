import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Cart from './Cart.tsx'
import ModalComp from './Modal.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Cart />
    <ModalComp />
  </React.StrictMode>,
)
