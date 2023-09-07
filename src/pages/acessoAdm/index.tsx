import "./style.css";
import logovw from "../../assets/img/acessoAdm/img/VWlogovw.png";
import volksBotPaz from "../../assets/img/acessoAdm/img/VOLKSBOT _PAZ_.png";
import api from "../../utils/api";
import secureLocalStorage from "react-secure-storage";

import { AxiosResponse, AxiosError } from "axios";

import { useState } from "react";

function AcessoAdm() {
  const link = (idUsuario: any) => {
    const url = `area-colaborador/:${idUsuario}`;

    return (window.location.href = url);
  };

  const [id, setId] = useState<String>("");
  const [senha, setSenha] = useState<String>("");
  const [email, setEmail] = useState<String>("");

  function realizarAutenticacao(event: any) {
    event.preventDefault();

    api
      .post("login", {
        id: id,
        email: email,
        password: senha,
      })
      .then((response: AxiosResponse) => {
        secureLocalStorage.setItem("user", response.data);
        alert("Logado com sucesso !!!");
        link(response.data["vwId"]);
      })
      .catch((error: AxiosError) => {
        alert("Não foi possível realizar o login.");
        console.log(error);
      });
  }
  return (
    <>
      <main id="acessoAdm" className="main-container">
        <section className="conteudo">
          <div className="lado-esquerdo">
            <div className="acesso">
              <h1>
                Acesso <br />
                Administrador
              </h1>
              <img src={logovw} alt="logo volksvagen" />
            </div>
            <div className="frase">
              <p>
                Este ambiente tem acesso <br /> restrito à administradores{" "}
                <br /> do BotQuestVW e <br /> curadores.
              </p>
            </div>
            {/* <div className="recado_fator">
                    <p>Atenção: login de administrador <br/> requer autenticação de dois <br/> fatores.</p>
                </div> */}
          </div>
          <div className="lado-direito">
            <div className="conteudo2">
              <div className="acesso_menor">
                <h1>
                  Acesso <br />
                  Administrador
                </h1>
                <img src={logovw} alt="logo volksvagen" />
              </div>
              <h1>Faça login</h1>
              <form className="formulario" onSubmit={realizarAutenticacao}>
                <input
                  type="tel"
                  maxLength={5}
                  minLength={5}
                  id="id"
                  placeholder="ID"
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
                <label htmlFor="ID"></label>

                <input
                  minLength={25}
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="ID"></label>

                <input
                  type="password"
                  id="Senha"
                  placeholder="Senha"
                  onChange={(e) => {
                    setSenha(e.target.value);
                  }}
                />
                <label htmlFor="Senha"></label>

                <button type="submit">Acessar</button>
                {/* <GoogleAuth /> */}
              </form>
              <div className="posicionamento_robo">
                {/* <div className="acessar">
                <Link to={"/helpdesk"}>Acessar</Link>
                </div> */}

                <div className="bot_salve">
                  <img src={volksBotPaz} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="segundo_fator">
            <img src={seta} alt="seta"/>
        </div> */}
      </main>
    </>
  );
}

export default AcessoAdm;
