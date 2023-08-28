import './style.css'

import logoVW from "../../assets/img/logo_vw.png"

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
            <a href="#">Acessar</a>
            <p>Esqueceu sua senha? <a href="../Recuperacao-senha/index.html">Clique aqui.</a></p>
        </div>
    </main>
    )
}