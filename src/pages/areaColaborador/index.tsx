

import './style.css'

import { useEffect, useState } from 'react';

import CardTarefa from '../../components/cardTarefa';
import CardEvento from '../../components/cardEvento';

import { avatares } from '../../assets/img/avatares/avatares';
import { eventos } from '../../components/cardEvento/eventos';
import { tarefas } from '../../components/cardTarefa/tarefas';


export default function AreaColaborador(){

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

    useEffect(() =>{
        document.title = "Área do colaborador - BQVW"
        // listarTarefas()
    }, [])

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
                        <ul>
                        {tarefas.map((tarefa:any, index:number) =>{
                            return <li key={index}>
                                <CardTarefa
                                titulo={tarefa.titulo}
                                id={tarefa.id}
                                />
                            </li>
                        }
                        )}
                    </ul>
                    </div>
                    <div className="card">
                        <h2>Eventos</h2>
                        <ul>
                        {eventos.map((evento:any, index:number) => {
                            return <li key={index}>
                                <CardEvento
                                nome={evento.nome}
                                id={evento.id}
                                img={evento.img}
                                />
                            </li>
                        })}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="right">
                <h1>Meu perfil</h1>
                <img src={avatares[0]} alt="" />
                <h3>TAMIGLD</h3>
                <button>Acessar</button>
            </section>
        </main>
    )
}

