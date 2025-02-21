import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form_exam from './pages/Form_exam.jsx'
import Counter from './pages/Counter.jsx'

createRoot(document.getElementById('root')).render(
    <Counter />
)
