import { createRoot } from 'react-dom/client'
import Layout from './pages/props/Layout'
import ContextLayout from './pages/contexts/ContextLayout'

createRoot(document.getElementById('root')).render(
    // <Layout />
    <ContextLayout/>
)
