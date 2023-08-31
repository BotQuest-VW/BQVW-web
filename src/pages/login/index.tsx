import "./style.css";

import { Image } from "../../components/Image";
import Loader from "../../components/loader";

import GoogleAuth from "../../components/auth";
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

  return (
    <>
      {loading == false ? (
        <>
          <form method="post" onChange={gettinAxios}>
            <div id="main_login" className="dados">
              <Image
                class=""
                source="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nicismpcs6-271%3A9?alt=media&token=34022096-56d5-4eb8-801a-3b8328125e59"
              />

              <h1>Faça seu login!</h1>
              <input
                type="tel"
                maxLength={5}
                id="id"
                placeholder="ID"
                onChange={handleIdState}
              />
              <label htmlFor="ID"></label>
              <input
                type="text"
                id="Time"
                placeholder="Time"
                onChange={handleTeamState}
              />
              <label htmlFor="Time"></label>
              <input
                type="password"
                id="Senha"
                placeholder="Senha"
                onChange={handlePasswordState}
              />
              <label htmlFor="Senha"></label>
              <button onClick={verifyState}>Acessar</button>
              <GoogleAuth />

              <p style={{ padding: 0 }}>
                Esqueceu sua senha? <a href="/recuperation">Clique aqui.</a>
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
