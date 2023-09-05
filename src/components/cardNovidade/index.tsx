
import "./style.css";
import { Link } from "react-router-dom";

export default function CardNovidade(props:any) {
  return (
    <>
      <div id="cardEvento">
        <div>
        <p>{props.titulo}</p>
        </div>
        <div>
          <Link target="_blank" to={props.link}>Veja mais</Link>
        </div>
      </div>
    </>
    )
}

