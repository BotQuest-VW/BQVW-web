import "./style.css";
import logovw from "../../assets/img/acessoAdm/img/VWlogovw.png";
import volksBotPaz from "../../assets/img/acessoAdm/img/VOLKSBOT _PAZ_.png";
import Loader from "../../components/loader";
import api from "../../utils/api";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router";
import { useState, ChangeEvent, SetStateAction } from "react";


function AcessoAdm() {
  const [loading] = useState<boolean>(false);

  const [idState, setIdState] = useState<SetStateAction<any>>();
  const [teamState, setTeamState] = useState<SetStateAction<any>>();
  const [passwordState, setPasswordState] = useState<SetStateAction<any>>();

  const handleIdState = (e: ChangeEvent<HTMLInputElement>) =>
    setIdState(e?.target.value);

  const handleTeamState = (e: ChangeEvent<HTMLInputElement>) =>
    setTeamState(e?.target.value);

  const handlePasswordState = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordState(e?.target.value);

  const verifyState = () => {
    const data = {
      id: [...idState],
      team: [...teamState],
      password: [...passwordState],
    };

    const { id, team, password } = data;

    id.length !== 5 && alert("seu id tem menos de 5 caracteres");
    team.length <= 5 && alert("seu time tem menos de 5 caracteres");
    password.length <= 5 && alert("sua senha tem menos de 5 caracteres");
  };


  const redirect = () => {
    const url = "http://localhost:5174/"
return (window.location.href = url )
  }

  // -----------------------------------------------------------POR API - THAMIRES
  const navigate = useNavigate()

  const [id, setId] = useState<String>("");
  const [senha, setSenha] = useState<String>("");
  const [email, setEmail] = useState<String>("");

  function realizarAutenticacao(event: any) {
    event.preventDefault();

    const usuario = {
      id: id,
      email: email,
      password: senha
    }
    api.post("login", usuario).then((response: any) => {
  secureLocalStorage.setItem("user", response.data)
  alert("Registrado com sucesso!!!");
  redirect(); 
})
.catch((error: any) => {
            alert("Não foi possível realizar o login.");
            console.log(error);
        })
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
                id="id"
                placeholder="ID"
                onChange={(e) => { setId(e.target.value) }}
              />
              <label htmlFor="ID"></label>

              <input
                type="email"
                id="email"
                placeholder="E-mail"
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <label htmlFor="ID"></label>

              <input
                type="password"
                id="Senha"
                placeholder="Senha"
                onChange={(e) => { setSenha(e.target.value) }}
              />
              <label htmlFor="Senha"></label>

              <button
                
                type="submit"
              >Acessar</button>
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
