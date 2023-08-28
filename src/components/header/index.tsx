import "./style.css"

import { Link } from "react-router-dom"

// imagens
import Blu_header from "../../assets/img/blu_header.png" 

export default function Header(){
    return(
        <header id="header_home">
            <div>
                <Link className="link" to={'/'}>
                <img src={Blu_header} alt="" />
                <p>BotQuest VW</p>
                </Link>
            </div>
            <nav>
                <Link to={'/'}>HOMEPAGE</Link>
                <Link to={'/login'}>LOGIN</Link>
                <Link to={'/'}>CADASTRE-SE</Link>
            </nav>
        </header>
    )
}