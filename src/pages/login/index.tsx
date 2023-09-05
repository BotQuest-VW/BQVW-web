import "./style.css";

import { Image } from "../../components/Image";
import Loader from "../../components/loader";

import api from "../../utils/api";

import secureLocalStorage from "react-secure-storage";

import { useNavigate } from "react-router";


// import GoogleAuth from "../../components/auth";
import { useState, ChangeEvent, SetStateAction } from "react";

export default function Login() {
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

  const gettinAxios = () => {
    // axios.post("blablabla")
  };

  // -----------------------------------------------------------POR API - THAMIRES
  const navigate = useNavigate()

  const [id, setId] = useState<String>("");
  const [senha, setSenha] = useState<String>("");
  const [direcao, setDirecao] = useState<String>("");
  const [email, setEmail] = useState<String>("");

  function realizarAutenticacao(event: any) {
    event.preventDefault();

    const usuario = {
      id: id,
      direcao: direcao,
      email: email,
      password: senha
    }

    api.post("login", usuario).then((response: any) => {
            secureLocalStorage.setItem("user", response.data)
            alert("Login efetuado com sucesso!");

            console.log(response.data);

            // navigate("/area-colaborador/" + response.data.user.id);
            // navigate(0);
        
        }).catch((error: any) => {
            alert("Não foi possível realizar o login.");
            console.log(error);
        })
}

  return (
    <>
      {loading == false ? (
        <>
          <form method="post" onSubmit={realizarAutenticacao}>
            <div id="main_login" className="dados">
              <Image
                class="img_vw"
                source="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nicismpcs6-271%3A9?alt=media&token=34022096-56d5-4eb8-801a-3b8328125e59"
              />
              <h1>Faça seu login!</h1>
              <input
                type="tel"
                maxLength={5}
                id="id"
                placeholder="ID"
                onChange={(e) => {setId(e.target.value)}}
              />
              <label htmlFor="ID"></label>
              
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <label htmlFor="ID"></label>

              <input
                type="text"
                id="Time"
                placeholder="Direção"
                onChange={(e) => {setDirecao(e.target.value)}}
              />
              <label htmlFor="Time"></label>

              <input
                type="password"
                id="Senha"
                placeholder="Senha"
                onChange={(e) => {setSenha(e.target.value)}}
              />
              <label htmlFor="Senha"></label>

              <button 
              // onClick={verifyState}
              type="submit"
              >Acessar</button>
              {/* <GoogleAuth /> */}

              <p 
                style={{ marginTop: "10px"}}>
                Esqueceu sua senha? <a style={{color: "#ffffff"}} href="/recuperation">Clique aqui.</a>
              </p>
            </div>
          </form>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 600,
            }}
          >
            <Loader />
          </div>
        </>
      )}
    </>
  );
}
