import "./style.css";

import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

import logado from "../../main";

// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function Header(props:any) {
  const navigate = useNavigate();

  function sair(event:any){   
      event.preventDefault()

      if (confirm("Tem certeza que deseja sair?") == true) {
          secureLocalStorage.removeItem("user")
          navigate("/")
          navigate(0)
        }
  }

  function mostrarMenu() {
    let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
    let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
    let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

    let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

    if (window.getComputedStyle(menu).left != "10px") {
      // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
      menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
      sombra.style.right = "-10vw"; // Move a sombra para a direita
      menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
      menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
      body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    } else {
      menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
      sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
      menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
      menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
      body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
    }
    menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
  }

  function abrirMenu(){
    let menu_lateral:any = document.getElementById('menu_lateral') as HTMLCanvasElement

    if(window.getComputedStyle(menu_lateral).opacity == "0"){
      menu_lateral.style.opacity = "1"
      menu_lateral.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
      menu_lateral.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
    } else {
      menu_lateral.style.opacity = "0"
      menu_lateral.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
      menu_lateral.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
    }
    menu_lateral.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
  }


  return (
    <>
      <header id="header_home">
        <a
          className="menu_barras"
          id="menu_barras"
          aria-label="abrir menu"
          aria-expanded="false"
          aria-controls="menu_links"
          aria-haspopup="true"
          onClick={mostrarMenu}
          href="#"
        >
          <div className="barras" />
        </a>
        <div>
          <Link className="link" to={"/"}>
            <img src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/blu_header.png?alt=media&token=317b726b-7e4a-4557-81f3-b60085755cf9" alt="" />
            <p>BotQuest VW</p>
          </Link>
        </div>
        <nav id="menu_links" className="menu_links">
        {
          props.user.logado ?
              <>
              <div id="menu">
                <div
                aria-label="abrir menu"
                aria-expanded="false"
                id="menu_lateral"
                style={{
                  display: "flex",
                  gap: '20px'
                }}>
                  <Link onClick={sair} className="btn_sair" to={"/"}>Sair</Link>
                  <Link to={"/"}>Editar Avatar</Link>
                </div>
                <div
                className="hover"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    cursor: 'pointer',
                    marginRight: '15px'
                  }}
                  onClick={abrirMenu}>
                  {/* <MenuRoundedIcon className="icon_menu"/> */}
                </div>
                <p>Olá, {props.nome}!</p>
              </div>
              </>
              :
              <>
              <Link className="link_header" to={"/"}>HOMEPAGE</Link>
              <Link className="link_header" to={"/login"}>LOGIN</Link>
              <Link className="link_header" to={"/cadastro"}>CADASTRE-SE</Link>              
              </>
        }
        </nav>
      </header>
    </>
  );
}
