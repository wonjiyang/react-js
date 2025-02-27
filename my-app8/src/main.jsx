import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MemoTest from './pages/MemoTest.jsx'
import UserCallBack_exam from './pages/UserCallBack_exam.jsx'
import UserCallBack_exam2 from './pages/UserCallBack_exam2.jsx'
import RouterMain from './pages/RouterMain.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <RouterMain />
    </BrowserRouter>
)
