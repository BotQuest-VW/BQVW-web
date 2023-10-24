import './usuario.css'

import { Link } from "react-router-dom"
import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import User from '../../../components/user'

import dashboard from './img/Dashboard Layout.png'
import iconUsuarios from './img/Vector.png'
import dados from './img/dados.png'
import setaVoltar from './img/botao-de-seta-para-a-esquerda 1.png'
import lapis from './img/Vector (1).png'
import menuHamburgue from './img/menu-hamburguer 1.png'
import usuarios2 from './img/usuario.png'
import lupa from './img/lupa.png'


import {useRef} from "react"






import CadastrarUsuario  from '../../cadastrarUsuario/editar'
import MenuLateral from '../../../components/asideHelpdesk'

type Props = {children: React.ReactNode | JSX.Element}

function Usuario({children}:Props) {

  const [usuarios, setUsuarios] = useState<string[]>([])

  const [visivel, setVisivel] = useState<React.SetStateAction<boolean>>(false)


  function listarUsuarios(){
    api.get("users").then((response:any) => {
      setUsuarios(response.data)
    })
  }

  function displayEdit(): void {

    const ref = useRef(setVisivel(true))


    return ref.current
  }


  

  useEffect(() => {
    document.title = "Usuários - BQVW ADM"
    listarUsuarios()
  }, [])


  return (
    <>
{visivel === true ? (<CadastrarUsuario/>) : <>

        <MenuLateral/>
<main id='usuario'>
        <section>
          <div className="menu_hamburgue">
            <img src={menuHamburgue} alt="" />
          </div>
          <div className="Sub_titulos">
            <h1>Usuários</h1>
            <div className="botoes">
              <div className="cad_pesquisa_usuario">
                {/* <div className="butao_usuarios">
                  <button onClick={displayEdit}>Cadastrar usuário<img src={usuarios2} alt="" /></button>
                </div> */}
                <div className="butao_usuarios">
                  <button>Pesquisar usuário<img src={lupa} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="Solicitacoes">
            <div className="linha_divisoria" />
            <table>
              <thead>
                <tr>
                  <th>Nome:</th>
                  <th>VW ID</th>
                  <th>Setor:</th>
                  <th>Usuário ativo</th>
                  <th />
                </tr>
              </thead>
              <tbody>
              {usuarios.map((usuario: any, index: number) => {
                  return(
                    <tr
                      key={index}
                    >
                      <User
                      avatar={usuario.user_img}
                      nome={usuario.nome}
                      id={usuario.vwId}
                      setor={usuario.setor}
                      />
                      <td className="ajustar_lapis">
                        <Link to={"editar-usuario"}>
                        <img src={lapis} alt="Ícone de edição" />
                        </Link>
                      </td>
                    </tr>
                    
                  );
                })}              
              </tbody>
            </table>
          </div>
        </section>
      </main>


</>}
    </>
  )
}
export default Usuario