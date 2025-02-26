import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Student from './pages/Student.jsx'
import StudentMain from './pages/StudentMain.jsx'

createRoot(document.getElementById('root')).render(
    <StudentMain />
)
