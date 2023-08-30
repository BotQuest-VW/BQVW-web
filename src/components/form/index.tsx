import { useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";

interface Props {
  acces: string;
}

export default function Form({ acces }: Props) {
  const [instruction] = useState({
    recuperation: `Siga estas etapas para recuperar sua senha e
            acessar sua conta novamente.`,
    delimitation: ` Durante o processo de recuperação, você terá acesso limitado à sua conta para usar recursos essenciais.`,
  });
  const [click, setClick] = useState<number>(0);

  const handleClick = () => setClick(click + 1);

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
            handleClick();

            return e.preventDefault();
          }}
        >
          <Link to="/active">{acces}</Link>
        </button>

        <div>
          <p
            style={{
              margin: 30,
              width: 450,
              marginLeft: 130,
              textDecoration: "underline",
            }}
          >
            {(click > 3 && instruction.recuperation) ||
              instruction.delimitation}
          </p>
        </div>
      </form>
    </>
  );
}
