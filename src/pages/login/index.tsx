import "./style.css";


import logoVW from "../../assets/img/logo_vw.png"
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <main>
        <div id='main_login' className="dados">
            <img className="logo" src={logoVW} alt=""/>
            <h1>Faça seu login!</h1>
            <input type="tel" maxLength={5} id="id" placeholder="ID"/>
            <label htmlFor="ID"></label>
            <input type="text" id="Time" placeholder="Time"/>
            <label htmlFor="Time"></label>
            <input type="password" id="Senha" placeholder="Senha"/>
            <label htmlFor="Senha"></label>
            <Link to="/area-colaborador">Acessar</Link>
            <p>Esqueceu sua senha? <a href="../Recuperacao-senha/index.html">Clique aqui.</a></p>

import logoVW from "../../assets/img/logo_vw.png";

export default function Login() {
  return (
    <>
      <form>
        <div id="main_login" className="dados">
          <img className="logo" src={logoVW} alt="" />
          <h1>Faça seu login!</h1>
          <input type="tel" maxLength={5} id="id" placeholder="ID" />
          <label htmlFor="ID"></label>
          <input type="text" id="Time" placeholder="Time" />
          <label htmlFor="Time"></label>
          <input type="password" id="Senha" placeholder="Senha" />
          <label htmlFor="Senha"></label>
          <button onClick={(e) => e.preventDefault()}>Acessar</button>
          <p>
            Esqueceu sua senha? <a href="/recuperation">Clique aqui.</a>
          </p>

        </div>
      </form>
    </>
  );
}
