import "./style.css";

import { Image } from "../../components/Image";
import Loader from "../../components/loader";

import GoogleAuth from "../../components/auth";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading == false ? (
        <>
          <form>
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
                required
              />
              <label htmlFor="ID"></label>
              <input type="text" id="Time" placeholder="Time" required />
              <label htmlFor="Time"></label>
              <input type="password" id="Senha" placeholder="Senha" required />
              <label htmlFor="Senha"></label>
              <button onClick={() => setLoading(true)}>Acessar</button>
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
