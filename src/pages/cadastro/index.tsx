import "./style.css";
import { useEffect, useState } from "react";
// import Logo from "../cadastro/img/iconeVW.png";

import api from "../../utils/api";

export default function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro - BotQuest VW";
  });

  const [vwId, setVwId] = useState<string>("")
  const [nome, setNome] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [direcao, setDirecao] = useState<string>("")
  const [gestorImediato, setGestorImediato] = useState<string>("")
  const [setor, setSetor] = useState<string>("")
  const [senha, setSenha] = useState<string>("")

  function cadastrarUsuario(event:any){
    event.preventDefault()
    const formdata = new FormData()

    formdata.append("vwId", vwId)
    formdata.append("nome", nome)
    formdata.append("email", email)
    formdata.append("direcao", direcao)
    formdata.append("gestor_imediato", gestorImediato)
    formdata.append("setor", setor)
    formdata.append("password", senha)
    
      // cadastro de usuario

      api.post("users", formdata).then((response) =>{
        console.log(response)
        alert("Usuario criado com Sucesso!😊")
        // Navegação para login
    }).catch((error)=>{
        console.log(error)
    })

    api.post
  }

  return (
    <>
      <section id="cadastro" className="cadastro">
        <form onSubmit={cadastrarUsuario} className="aba_cadastro" method="post">
          <img className="logovw" alt="" src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/icon_vw.png?alt=media&token=0b056a56-9020-4d26-b3ed-cd7bdbd05b2b" />
          <h2>Faça seu cadastro!</h2>

          <label className="id" htmlFor="vwid" />
          <input 
          id="vwid"
          className="id" 
          placeholder="VW ID" 
          type="tel"
          maxLength={5}
          onChange={(event) => {setVwId(event.target.value)}}
          required
          />
          
          <label className="nome" htmlFor="nome" />
          <input 
          id="nome"
          className="nome"
          placeholder="Nome"
          type="text"
          onChange={(event) => {setNome(event.target.value)}}
          required
          />
                    
          <label className="nome" htmlFor="email" />
          <input 
          id="email"
          className="email"
          placeholder="E-mail"
          type="text"
          onChange={(event) => {setEmail(event.target.value)}}
          required
          />

            <label className="time" htmlFor="direcao" />
            <input
            id="direcao"
            className="time"
            placeholder="Direção"
            type="text"
            maxLength={6}
            onChange={(event) => {setDirecao(event.target.value)}}
            required
            />

          <label className="supervisor" htmlFor="supervisor" />
          <input
            id="supervisor"
            className="supervisor"
            placeholder="Gestor imediato"
            type="text"
            onChange={(event) => {setGestorImediato(event.target.value)}}
            required
            />

          <label className="setor" htmlFor="setor" />
          <input 
          id="setor"
          className="setor" 
          placeholder="Setor" 
          type="text" 
          onChange={(event) => {setSetor(event.target.value)}}
          required
            />

          <label className="senha" htmlFor="senha" />
          <input 
          id="senha"
          className="senha" 
          placeholder="Senha" 
          type="password" 
          onChange={(event) => {setSenha(event.target.value)}}
          required
            />
            
          <label className="repetir_senha" htmlFor="repeatsenha" />
          <input
            id="repeatsenha"
            className="repetir_senha"
            placeholder="Repetir a sua senha"
            type="password"
            required
          />
          <div className="nivel_da_senha">
            <span>Nível da senha</span>
            <div className="tudo">
              <div className=" linha">
                <div className="retangulo vermelho" />
                <span>Fraca</span>
              </div>
              <div className=" linha">
                <div className="retangulo amarelo" />
                <span>Média</span>
              </div>
              <div className=" linha">
                <div className="retangulo verde" />
                <span>Forte</span>
              </div>
            </div>
            <div className="teste">
              <span>Sugestão de Senha:</span>
              <ul>
                <li>No mínimo uma letra maiúscula</li>
                <li>No mínimo uma letra minúscula</li>
                <li>No mínimo um número</li>
              </ul>
              <div>
                <button type="submit">Cadastrar</button>
              </div>
            </div>
          </div>
        </form>
        <div className="aceite">
          <div>
            <input type="checkbox" id="check" name="checkbox" required/>
            <label htmlFor="checkbox">
              Li e aceito os Termos e Condições da corporação
            </label>
          </div>
        </div>
      </section>




      <div id="mostrar_overlay">
        <div id="overlay">
          <div className="overlay_div">
            <div>
              <h1>Confirmação do número de celular</h1>
              <span>
                Enviaremos um código ao seu número de celular registrado
                anteriormente
              </span>
            </div>
            <div>
              <img
                className="icon_celular"
                // src="../Cadastro/img/icon_celular.png"
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <div className="wrapper-container">
              <p>
                Digite o código que você recebeu no seu número de celular com
                final XX59
              </p>
              <div className="wrapper-pin">
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={1}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={2}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={3}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={4}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={5}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={6}
                />
              </div>
            </div>
          </div>
          <a href="../Login/index.html">Enviar</a>
        </div>
        <a href="#">Voltar</a>
      </div>
    </>
  );
}
