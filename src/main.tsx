import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { Route, Routes, BrowserRouter } from "react-router-dom";


import Header from "./components/header/index.tsx";
import Footer from "./components/footer/index.tsx";


import Homepage from './pages/homepage/index.tsx'
import Login from './pages/login/index.tsx'
import AcessoAdm from './pages/acessoAdm/index.tsx'
import Metricas from './pages/helpdesk/metricas/metricas.tsx'
import HomeHelpdesk from './pages/helpdesk/telaInicial/index.tsx'
import Usuario from './pages/helpdesk/usuarios/usuario.tsx'

import Homepage from "./pages/homepage/index.tsx";
import Login from "./pages/login/index.tsx";


import Recuperation from "./pages/recuperation/index.tsx";

import Active from "./pages/recuperation/active/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
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

        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/recuperation"
          element={
            <Recuperation
              title="Recuperação de Senha"
              talk="Digite seu e-mail institucional para a recuperação de senha."
              description="Será enviado um link de redefinição de senha para o seu endereço de
              e-mail."
            />
          }
        />
        <Route path="/active" element={<Active />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
