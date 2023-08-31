import "./style.css";

import { Image } from "../../components/Image";
import Form from "../../components/form";
import { useState } from "react";

export default function Recuperation() {
  const [visible, setVisible] = useState(false);

  const handleTime = () => setTimeout(() => setVisible(true), 1500);
  handleTime();

  return (
    <main>
      {visible == true ? (
        <div id="main_login" className="dados">
          <Image
            class="robot"
            source="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xzjx27buj2k-106%3A18?alt=media&token=55352e40-f453-403c-8619-c6b5cd369dc5"
          ></Image>
          <h1>Recuperacao de senha</h1>
          <span>
            Digite seu e-mail institucional para a recuperação de senha.
          </span>
          <span>
            Será enviado um link de redefinição de senha para o seu endereço de
            e-mail.
          </span>
          <Form acces="Acessar" />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              width: 1000,
              height: 500,
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 650px",
              fontSize: 59,
              flexShrink: 1,
            }}
          >
            pode demorar um pouco ...
          </div>
        </>
      )}
    </main>
  );
}
