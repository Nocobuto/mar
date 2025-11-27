import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// 👇 Importa tu imagen desde src
import bg from './assets/bg.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ci">
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 👇 Aplica el fondo dinámicamente
document.body.style.backgroundImage = `url(${bg})`
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundRepeat = 'no-repeat'
document.body.style.backgroundAttachment = 'fixed'
document.body.style.backgroundPosition = 'center'
