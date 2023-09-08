import "./style.css";

import { Image } from "../../components/Image";
import Loader from "../../components/loader";

import api from "../../utils/api";

import secureLocalStorage from "react-secure-storage";

import { useNavigate } from "react-router";

import { AxiosResponse, AxiosError } from "axios";
import { useState, SetStateAction, useEffect } from "react";

import auth from "../../utils/auth";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const [id, setId] = useState<SetStateAction<string>>("");
  const [email, setEmail] = useState<typeof id>("");
  const [senha, setSenha] = useState<typeof id>("");

  function realizarAutenticacao(
    event: React.ChangeEvent<HTMLFormElement>
  ): any {
    event.preventDefault();

    type Usuario = {
      id: typeof id;
      email: typeof email;
      password: typeof senha;
    };

    const usuario: Usuario = {
      id: id,
      email: email,
      password: senha,
    };

    api
      .post("login", usuario)
      .then((response: AxiosResponse) => {
        secureLocalStorage.setItem("user", response.data);
        alert("Login efetuado com sucesso!");
        navigate("/area-colaborador/" + response.data.user.id);
        navigate(0);
      })
      .catch((error: AxiosError) => {
        alert("Não foi possível realizar o login.");
        console.log(error);
      });
  }

  useEffect(() => {
    document.title = "Login - BotQuest VW";
    setTimeout(() => setLoading(true), 1500);
  }, [loading]);

  return (
    <>
      {loading == true ? (
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
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <label htmlFor="ID"></label>

              <input
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

              <button
                // onClick={verifyState}
                type="submit"
              >
                Acessar
              </button>
              {/* <GoogleAuth /> */}

              <p style={{ marginTop: "10px" }}>
                Esqueceu sua senha?{" "}
                <a style={{ color: "#ffffff" }} href="/recuperation">
                  Clique aqui.
                </a>
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
