import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App.jsx'
import Game from './Game/Game.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
<Router>
  

  <Routes>
    <Route path='/' element={ <App />}/>
    <Route path='/game' element={<Game/>}/>
  </Routes>

   

    </Router>

)
