import './aside.css'

import dashboard from "../../pages/helpdesk/usuarios/img/Dashboard Layout.png";
import vector from "../../pages/helpdesk/usuarios/img/Vector.png";
import dados from "../../pages/helpdesk/usuarios/img/dados.png";
import setaVoltar from "../../pages/helpdesk/usuarios/img/botao-de-seta-para-a-esquerda 1.png";

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MenuLateral(){
    const location = useLocation()
    
    function checkCor(){
        switch(location.pathname){
            case '/editar-usuario':
                return "var(--azulC)"
            case "/usuarioHelpdesk":
                return "var(--azulC)"
            case "/metricas":
                return "var(--azulC)"
            case "/helpdesk":
                return "var(--azulC)"   
            default:
        }
    }

    return(
        <aside>
            <div>
                <Link
                className='telaInicial lateralLink' 
                to={"/helpdesk"}
                style={{backgroundColor: `${checkCor()}`}}
                >
                    <img src={dashboard} alt="" />    
                    Tela Inicial
                </Link>
                <Link 
                className='lateralUser lateralLink' 
                to={"/usuarioHelpdesk"}
                style={{backgroundColor: `${checkCor}`}}
                >
                    <img src={vector} alt="" />
                    Usuários
                </Link>
                <Link 
                className='lateralData lateralLink' 
                to={"/metricas"}
                style={{backgroundColor: `${checkCor}`}}       
                >                    
                    <img src={dados} alt="" />
                    Metricas
                </Link>
            </div>
            <Link className='lateralVoltarConfig' to={"/acessoAdm"}>
                <img src={setaVoltar} alt="" />            
                Voltar ao Inicio
            </Link>
        </aside>
    )
}