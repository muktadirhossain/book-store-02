import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import HomePage from './pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <Register/> */}
    <Dashboard/>
    {/* <HomePage/> */}
  </StrictMode>,
)
