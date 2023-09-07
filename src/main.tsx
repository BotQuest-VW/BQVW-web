import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



import { Route, Routes, BrowserRouter } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

import Header from "./components/header/index";
// import Footer from "./components/footer/index";



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
import DeletarTarefa from "./components/cardTarefa/deletarTarefa";
import PerfilUsuario from "./components/perfilUsuario";

export default function logado() {

  if (secureLocalStorage.getItem("user")) {

    const objetoUsuario: any = secureLocalStorage.getItem("user");

    // APARECE O PRIMEIRO NOME
    const nome:string =  objetoUsuario.user.nome.trim().split(" ")[0]

    return {
      logado: true,
      // nome: nome
    }
  } else{
    return { 
      logado: false,
      // nome: null
    }
  }
}



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>

      <Header user={logado()}/>

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
        <Route path="/area-colaborador/:idUsuario" element={<AreaColaborador />} />
        <Route path="/area-colaborador/deletar/:idTarefa" element={<DeletarTarefa />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      {/* <Footer /> */}

    </BrowserRouter>
  </React.StrictMode>
);
