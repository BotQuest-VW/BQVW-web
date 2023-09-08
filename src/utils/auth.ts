import { AxiosError, AxiosResponse } from "axios";
import secureLocalStorage from "react-secure-storage";

import { useNavigate } from "react-router-dom";

import api from "./api";
import { FormEventHandler } from "react";

export default function auth(
  method: string,
  {
    id,
    email,
    password,
  }: {
    id: string;
    email: string;
    password: string;
  }
) {
  const navigate = useNavigate();

  type User = {
    id: typeof id;
    email: typeof email;
    password: typeof password;
  };

  const usuario: User = {
    id: id,
    email: email,
    password: password,
  };

  api
    .post(method, usuario)
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

  return usuario;
}
