

import './style.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CardTarefa from '../../components/cardTarefa';
import CardEvento from '../../components/cardEvento';

import { avatares } from '../../assets/img/avatares/avatares';
import { eventos } from '../../components/cardEvento/eventos';
// import { tarefas } from '../../components/cardTarefa/tarefas';
// import AddTask from '../../components/cardTarefa/addTask';

import api from '../../utils/api';

 

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
    
    useEffect(() =>{
        document.title = "Área do colaborador - BQVW"
        listarTarefas()
    }, [])

    const [tarefas, setTarefas] = useState<any[]>([])
    const [titulo, setTitulo] = useState("")

    function listarTarefas(){
        api.get("tarefas").then((response: any) => {
            console.log(response.data)
            setTarefas(response.data)
        }).catch(error => console.log("Erro ao obter os dados das tarefas", error));
    }

    function addTask(event:any){
        event.preventDefault();
        const formdata = new FormData()

        formdata.append("titulo", titulo)

        api.post("tarefas", formdata).then((response:any) => {
            console.log(response)
            alert("Tarefa adicionada!")
            window.location.reload()
        }).catch((error)=>{
            console.log(error)
        })

        api.post
    }

    // const [visible, setVisible] = useState(false);

    // const handleTime = () => setTimeout(() => setVisible(true), 1500);
    // handleTime();


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
                        <div className="listaTask"
                        style={{
                            height: "85%"
                        }}>
                            <ul id='listaTarefas'
                             style={{
                                marginRight: "15px"
                            }}>
                                {tarefas.map((tarefa:any, index:number) =>{
                                    return <li key={index}>
                                        <CardTarefa
                                        titulo={tarefa.titulo}
                                        id={tarefa.id}
                                        />
                                    </li>
                                }
                                )}
                                <div id="addTask" className="addTask">
                                    <form id='taskForm' action="" method="post" onSubmit={addTask}>
                                        <label htmlFor="task"></label>
                                        <input
                                        id='task' 
                                        name='campo_task' 
                                        type="text" 
                                        placeholder='Título da tarefa'
                                        onChange={ (e) => {setTitulo(e.target.value)} }
                                        required
                                        />
                                        <button>Adicionar</button>
                                    </form>
                                </div>
                            </ul>                           
                        </div>
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
                <button>
                    <p>Acessar</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                        <circle cx="36.2934" cy="35.7065" r="32.4274" fill="#23CE6B" stroke="#F1F2F5" strokeWidth="6.55836"/>
                        <path d="M44.207 34.094C45.4483 34.8107 45.4483 36.6024 44.207 37.3191L33.7332 43.3661C32.4919 44.0828 30.9402 43.187 30.9402 41.7536L30.9402 29.6595C30.9402 28.2261 32.4919 27.3303 33.7332 28.0469L44.207 34.094Z" stroke="#F1F2F5" strokeWidth="3"/>
                    </svg>  
                </button>
            </section>

        </main>
    )
}

