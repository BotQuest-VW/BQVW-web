
import "./style.css";

export default function CardEvento(props:any) {
  return (
    <>
      <div id="cardEvento" 
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="titulo">
          <span className="bolinha_event"></span>
          <span>{props.nome}</span>
        </div>
        <span>18/05 às 18h</span>
      </div>

        </>
    )
}

