import "./style.css";
import { useEffect } from "react";
// import Logo from "../cadastro/img/iconeVW.png";

export default function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro - BotQuest VW";
  });

  return (
    <>
      <section id="cadastro" className="cadastro">
        <form className="aba_cadastro">
          <img className= "" src= "https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/icon_vw.png?alt=media&token=0b056a56-9020-4d26-b3ed-cd7bdbd05b2b"alt="" />
          <h2>Faça seu cadastro!</h2>
          <input className="id" placeholder="VW ID" type="text" />
          <input className="nome" placeholder="Nome" type="text" />
          <input
            className="time"
            placeholder="Direção"
            type="text"
            maxLength={6}
          />
          <input
            className="supervisor"
            placeholder="Gestor imediato"
            type="text"
          />
          <input className="setor" placeholder="Setor" type="text" />
          <input className="senha" placeholder="Senha" type="password" />
          <input
            className="repetir_senha"
            placeholder="Repetir a sua senha"
            type="password"
          />
          <label className="id" htmlFor="ID" />
          <label className="nome" htmlFor="Nome" />
          <label className="time" htmlFor="Time" />
          <label className="supervisor" htmlFor="" />
          <label className="setor" htmlFor="Setor" />
          <label className="senha" htmlFor="Senha" />
          <label className="repetir_senha" htmlFor="Repetir a sua senha" />
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
                <a href="#">Cadastrar</a>
              </div>
            </div>
          </div>
        </form>
        <div className="aceite">
          <div>
            <input type="checkbox" id="check" name="checkbox" />
            <label htmlFor="check">
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
                src="../Cadastro/img/icon_celular.png"
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
