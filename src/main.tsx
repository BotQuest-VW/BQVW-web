

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from "./components/header/index";
import Footer from "./components/footer/index";



import Homepage from './pages/homepage/index'
import Login from './pages/login/index'

import AreaColaborador from './pages/areaColaborador/index'

import AcessoAdm from './pages/acessoAdm/index'
import Metricas from './pages/helpdesk/metricas/metricas'
import HomeHelpdesk from './pages/helpdesk/telaInicial/index'
import Usuario from './pages/helpdesk/usuarios/usuario'





import Recuperation from "./pages/recuperation/index";


import Active from "./pages/recuperation/active/index";

import Cadastro from "./pages/cadastro/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/acessoAdm" element={<AcessoAdm />} />
        <Route path="/metricas" element={<Metricas />} />
        <Route path="/usuarioHelpdesk" element={<Usuario />} />
        <Route path="/helpdesk" element={<HomeHelpdesk />} />
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
        <Route path="/area-colaborador" element={<AreaColaborador />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  </React.StrictMode>
);
