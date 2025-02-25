import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseEffect from './pages/UseEffect.jsx'
import UseEffect2 from './pages/UseEffect2.jsx'
import TimerMain from './pages/TimerMain.jsx'
import UseReducer from './pages/UseReducer.jsx'

createRoot(document.getElementById('root')).render(
    <UseReducer />
)
