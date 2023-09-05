import "./style.css";
import logovw from "../../assets/img/acessoAdm/img/VWlogovw.png";
import volksBotPaz from "../../assets/img/acessoAdm/img/VOLKSBOT _PAZ_.png";

import { Link } from "react-router-dom";

function AcessoAdm() {
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
              <form className="formulario">
                <label htmlFor="Nome"></label>
                <input type="text" placeholder="Cód. de acesso:" />
                <input type="password" placeholder="Senha:" />
                <label htmlFor="senha"></label>
              </form>
              <div className="posicionamento_robo">
                <div className="acessar">
                <Link to={"/helpdesk"}>Acessar</Link>
                </div>

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
