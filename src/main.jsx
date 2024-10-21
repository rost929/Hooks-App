import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { MainApp } from './09-useContext/MainApp'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
)
