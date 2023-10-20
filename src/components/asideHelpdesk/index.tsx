import './aside.css'

import dashboard from "../../pages/helpdesk/usuarios/img/Dashboard Layout.png";
import vector from "../../pages/helpdesk/usuarios/img/Vector.png";
import dados from "../../pages/helpdesk/usuarios/img/dados.png";
import setaVoltar from "../../pages/helpdesk/usuarios/img/botao-de-seta-para-a-esquerda 1.png";

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MenuLateral(){
    const location = useLocation()  

    const ativo = () => {
        switch(path){
            case "/helpdesk":
                setCorHelpdesk("var(--azulC")
                break
            case "/usuarioHelpdesk":
                setCorUsuarios("var(--azulC")
                break
            case "/metricas":
                setCorMetricas("var(--azulC")
                break
           }
    }

    useEffect(() => {
        ativo()
    })
    
    const path = location.pathname
    const [corHelpdesk, setCorHelpdesk] = useState<any>()
    const [corUsuarios, setCorUsuarios] = useState<any>()
    const [corMetricas, setCorMetricas] = useState<any>()

    return(
        <aside>
            <div>
                <Link
                className='telaInicial lateralLink' 
                to={"/helpdesk"}
                style={{backgroundColor: `${corHelpdesk}`}}
                >
                    <img src={dashboard} alt="" /> 
                    Tela Inicial
                </Link>
                <Link
                className='lateralUser lateralLink' 
                to={"/usuarioHelpdesk"}
                style={{backgroundColor: `${corUsuarios}`}}
                >
                    <img src={vector} alt="" />
                    Usuários
                </Link>
                <Link 
                className='lateralData lateralLink' 
                to={"/metricas"}
                style={{backgroundColor: `${corMetricas}`}}       
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