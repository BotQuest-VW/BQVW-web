import "./style.css";

import imgCard from "../../assets/img/cardEvento/evento_img1.png";

export default function CardEvento(props: any) {
  return (
    <>
      <div id="cardEvento">
        <div className="titulo">
          <span className="bolinha_event"></span>
          <span>title</span>
        </div>
        <span>18/05 às 18h</span>
      </div>
      {/* <div id='cardEvento'>
            <div>
                <span className="bolinha"></span>
                <p>title</p>
            </div>
        </div> */}
    </>
  );
}
