import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from './components/header/index.tsx'
import Footer from './components/footer/index.tsx'

import Homepage from './pages/homepage/index.tsx'
import Login from './pages/login/index.tsx'
import AcessoAdm from './pages/acessoAdm/index.tsx'
import Metricas from './pages/helpdesk/metricas/metricas.tsx'
import HomeHelpdesk from './pages/helpdesk/telaInicial/index.tsx'
import Usuario from './pages/helpdesk/usuarios/usuario.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/acessoAdm' element={<AcessoAdm />} />
        <Route path='/metricas' element={<Metricas />} />
        <Route path='/usuarioHelpdesk' element={<Usuario />} />
        <Route path='/helpdesk' element={<HomeHelpdesk />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
