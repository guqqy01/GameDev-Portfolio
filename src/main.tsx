import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './css/variables.css'
import './css/layout.css'
import './css/components.css'
import './css/games.css'
import './css/game-page.css'
import App from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
