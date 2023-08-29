import './style.css'

import uncheck from "../../assets/img/vetor_uncheck.svg"
import check from "../../assets/img/check.png"

export default function itemCard(){

    

    return(
        <>
        <div className='itemCard'>
            <div>
                <span className="bolinha"></span>
                <p>Gestão de documentos</p>
            </div>
                <div className="round">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox"></label>
                </div>
            {/* <button id='boton' type="button"><img src={uncheck} alt="" /></button> */}
        </div>
        </>
    )
}