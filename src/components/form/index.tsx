import { useState } from "react";

import "./style.css";

interface Props {
  acces: string;
}

export default function Form({ acces }: Props) {
  const [instruction] = useState({
    recuperation: `Recuperação de Senha: Siga estas etapas para recuperar sua senha e
            acessar sua conta novamente.`,
    delimitation: `Acesso Limitado: Durante o processo de recuperação, você terá acesso limitado à sua conta para usar recursos essenciais.`,
  });
  const [click, setClick] = useState<number>(0);

  const handleClick = () => setClick(click + 1);

  return (
    <>
      <form action="" method="post">
        <div className="form-content">
          <input type="text" id="Time" placeholder="E-mail" required />
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
          <a href="#">{acces}</a>
        </button>
        <div>
          <p style={{ margin: 30, width: 450, marginLeft: 130 }}>
            {(click > 3 && instruction.recuperation) ||
              instruction.delimitation}
          </p>
        </div>
      </form>
    </>
  );
}
