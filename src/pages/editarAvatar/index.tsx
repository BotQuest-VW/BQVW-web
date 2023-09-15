import './style.css'
import { useNavigate } from 'react-router-dom'

import ListaAvatares from '../../components/avatares'

import api from '../../utils/api'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Loader from '../../components/loader'

export default function EditarAvatar(props: any){
    const {idUsuario} = useParams()
    const navigate = useNavigate()

    const [avatares, setAvatares] = useState<any[]>([])
    const [avatarEscolhido, setAvatarEscolhido] = useState<string>("")

    
    function listarAvatares(){
        api.get("avatares").then((response:any) => {
            setAvatares(response.data)
        })
    }
    
    const [currentVwId, setCurrentVwId] = useState<string>("")
    const [currentNome, setCurrentNome] = useState<string>("")
    const [currentEmail, setCurrentEmail] = useState<string>("")
    const [currentGestorImediato, setCurrentGestorImediato] = useState<string>("")
    const [currentSetor, setCurrentSetor] = useState<string>("")
    const [currentPassword, setCurrentPassword] = useState<string>("")


    function puxarDadosAtuais(){
        api.get(`users/${idUsuario}`).then((response:any) => {
            setCurrentVwId(response.data.vwId)
            setCurrentNome(response.data.nome)
            setCurrentEmail(response.data.email)
            setCurrentGestorImediato(response.data.gestor_imediato)
            setCurrentSetor(response.data.setor)
            setCurrentPassword(response.data.password)
        })
    }

    function selectAvatar(event:any){
        event.preventDefault()
        let escolha = (document.querySelector('input[name="avatar"]:checked') as HTMLInputElement).value;
        console.log(escolha)
        setAvatarEscolhido(escolha)
        
        const formdata = new FormData()
        formdata.set("email", currentEmail)
        formdata.set("password", currentPassword)
        formdata.set("vwId", currentVwId)
        formdata.set("nome", currentNome)
        formdata.set("gestor_imediato", currentGestorImediato)
        formdata.set("setor", currentSetor)
        formdata.set("user_img", escolha)

        api.put(`users/${idUsuario}`, formdata)

        navigate(-1)
    }

    


    useEffect(() => {
        document.title = "Editar Avatar - BotQuest VW"
        listarAvatares()
        puxarDadosAtuais()
    }, [])

    // vvvvvvvvvvvvvv FUNÇÃO LOADER
    const [visible, setVisible] = useState(false);

    const handleTime = () => setTimeout(() => setVisible(true), 1500);
    handleTime();
    // ^^^^^^^^^^^^^^ FUNÇÃO LOADER

    return(
        <section id='editAvatar'>
        {props.user.logado  ? (
            <>
        {visible == true ? (
            <>
            <div className='editAvatar'>
                <h3 
                onClick={() => (navigate(-1))}
                style={{
                    alignSelf: "flex-start"
                }}>Voltar</h3>
                    <div className='editAvatar-low'>
                        <h1>Selecione o seu avatar!</h1>
                        <form action="" className="selectAvatares" onSubmit={selectAvatar}>
                            <div className='avatares'>

                            {avatares.map((avatar: any, index: number) => {
                                return(
                                    <>
                                    <li 
                                    key={index}
                                    style={{
                                        listStyle: "none"
                                    }}
                                    >
                                        <ListaAvatares
                                        url={avatar.url}
                                        id={avatar.id}
                                        name={avatar.name}
                                        />
                                    </li>
                                    </>
                                )
                            })}
                            </div>
                        <button style={{cursor: "pointer"}}>Selecionar</button>
                        </form>
                    </div>
            </div>
            </>
            ) : (
                <>
                <div
                style={{
                display: "flex",
                height: 500,
                width: "100vw",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 1,
                }}
                >
                    <Loader />
                </div>
                </>
            )}
            </>
        ) : (
            <>
          <section id="message_login">
            <img
              style={{
                width: "150px",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/area-colaborador%2Fsad.png?alt=media&token=90071968-52f6-43c0-bd5f-544762c1218f"
              alt=""
            />
            <p>Você não está logado 😥</p>
            <h1>Faça seu login!</h1>
            <Link
              style={{
                color: "var(--verdeC)",
              }}
              to={"/login"}
            >
              Clique aqui
            </Link>
          </section>
        </>
        )}
        </section>
        
    )
}