import { useState, useEffect, ChangeEvent } from "react";

import "./style.css";

interface Props {
  acces: string;
  animate: any;
}

export default function Form({ acces, animate }: Props) {
  const [instruction] = useState({
    recuperation: `Siga estas etapas para recuperar sua senha e
            acessar sua conta novamente.`,
    delimitation: ` Durante o processo de recuperação, você terá acesso limitado à sua conta para usar recursos essenciais.`,
  });
  const [click, setClick] = useState<number>(0);

  const [state, setState] = useState<any>();

  const Redirect = (): void => {
    window.location.href = "http://localhost:5173/active";
  };

  useEffect(() => {
    const input = (event: ChangeEvent<HTMLInputElement>) => event?.target.value;

    setState(input);
    console.log(state);
  }, []);

  return (
    <>
      <form action="" method="post">
        <div className="form-content">
          <input
            type="text"
            id="Time"
            minLength={4}
            placeholder="E-mail"
            required
          />
          <label htmlFor="E-mail"></label>
          <input
            type="text"
            id="E-mail"
            placeholder="repetir E-mail"
            required
          />
          <label htmlFor="Senha"></label>
        </div>
        <button
          onClick={(e) => {
            state === typeof "string"
              ? e.preventDefault()
              : alert("voce precisa colocar seu email ai ...");
          }}
        >
          {acces}
        </button>

        <div>
          <p
            className={animate}
            style={{
              margin: 30,
              width: 450,
              marginLeft: 130,
              textDecoration: "underline",
            }}
          >
            {instruction.recuperation}
          </p>
        </div>
      </form>
    </>
  );
}
