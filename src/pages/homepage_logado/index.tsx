import './style.css'

import { useEffect, useState } from 'react';

import uncheck from "../../assets/img/uncheck.png"
import check from "../../assets/img/check.png"


import itemCard from '../../components/itemCard';

export default function Homepage_logado(){

    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    // const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    
    const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    const mês = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const d = new Date();        
    
    const diaSemana = semana[d.getDay()]
    const mesAtual = mês[d.getMonth()]
    const dataAtual = diaSemana + ', ' + dia + ' de ' + mesAtual + ' de ' + ano;
    
    console.log(dataAtual)


    const [tarefas, setTarefas] = useState<any[]>([])

    

        // console.log(semana[d.getDay()])

    
    return(
        <main id='area_colaborador'>
            <section className="left">
                <div>
                    <h1>Visão Geral</h1>
                    <span>{dataAtual}</span>
                </div>
                <div>
                    <div className="card">
                        <h2>Minhas tarefas</h2>
                        {itemCard()}
                    </div>
                    <div className="card">
                        <h2>Eventos</h2>
                    </div>
                </div>
            </section>
            <section className="right">

            </section>
        </main>
    )
}