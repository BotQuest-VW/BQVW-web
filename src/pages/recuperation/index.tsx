import "./style.css";

import { Image } from "../../components/Image";
import Form from "../../components/form";
import { useState } from "react";

export default function Recuperation() {
  return (
    <main>
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
    </main>
  );
}
