import './style.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../../utils/api'
import { Link } from 'react-router-dom'

export default function DeletarTarefa(){
    const {idTarefa} = useParams()   

    useEffect(() => {
        tituloTask()
    }, [])

    const [titulo, setTitulo] = useState<string>("")
    
    function tituloTask(){
        api.get(`tarefas/${idTarefa}`).then((response: any) => {
            setTitulo(response.data.titulo)})
    }

    function deletarTarefa(){
    api.delete(`tarefas/${idTarefa}`).then((response:any) => {
        alert("A tarefa foi deletada com sucesso! 🤩")
    }).catch((error) => {
        alert("Tivemos um erro ado adicionar sua tarefa. 😓")
        console.log(error)
    })
    }

    return(
        <section id='deletTask'>
            <div>
                <h1 style={{textTransform: "capitalize"}}>Tarefa: {titulo}</h1>
                <h2>Tem certeza que deseja deletar esta tarefa?</h2>
                <div>
                <Link className='link' to={"/area-colaborador"}>
                    <button onClick={deletarTarefa}>Sim</button>
                </Link>
                <Link className='link' to={"/area-colaborador"}>
                    <button>Não</button>
                </Link>
                </div>
            </div>
        </section>
    )
}