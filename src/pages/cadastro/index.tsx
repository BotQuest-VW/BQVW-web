import "./style.css";
import { useEffect, useState, useRef } from "react";
// import Logo from "../cadastro/img/iconeVW.png";
import { useNavigate } from "react-router-dom";

import api from "../../utils/api";

export default function Cadastro() {
  const navigate = useNavigate()

  const [vwId, setVwId] = useState<string>("")
  // const [vwId, setVwId] = useState<React.SetStateAction<string>>("")
  const [nome, setNome] = useState<typeof vwId>("")
  const [email, setEmail] = useState<typeof vwId>("")
  const [gestorImediato, setGestorImediato] = useState<typeof vwId>("")
  const [chapa, setChapa] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const [data, setData] = useState<String>("")
  const [confirmSenha, setConfirmSenha] = useState<string>("")


<<<<<<< HEAD
=======
  const inputRef = useRef<React.SetStateAction<number>>(0);

  useEffect(() => {
    (prevstate: any) => {
      inputRef.current = prevstate
      prevstate + 1
      console.log(prevstate)
      document.title = "Cadastro - BotQuest VW"
    }
  })

>>>>>>> f7c2a1955cf8bb5f2aebd2dad781346db7690ee7
  // quando a senha tiver menos de 8 caracteres , esse erro vai acontecer !!! 
  // const validatePassword = () => inputRef.current !== 20 
  // ? alert("voce precisa que a senha tenha 20 caracteres ")
  // : null ;
  // DESABILITEI POR ENQUANTO, INSERI NA CADASTRAR USUÁRIO

  
      const [select, setSelect] = useState<string>("");
  
      const [sectores, setSectores] = useState<string[]>(
        [
          "Recursos Humanos",
          "Produção",
          "Finanças",
          "Jurídico",
          "Logística"
  
        ]
      );
      const [tipoDeUsuarios, setTipoDeUsuarios] = useState<string[]>(
        [
          "ADIMIN",
          "COMUM"
  
        ]
      );

      const [setoresSelecionados, setSetoresSelecionados] = useState<string[]>([]);

  function cadastrarUsuario() {
    // event.preventDefault()
    const formatVwId = vwId.replace(/(\d{3})(\d)/, "$1-$2")
    // fomata o vwId para 000-00
    const formdata = new FormData()

    formdata.append("vwId", String(formatVwId))
    formdata.append("nome", String(nome))
    formdata.append("email", String(email))
    formdata.append("gestor_imediato", String(gestorImediato))
    formdata.append("setor", JSON.stringify(setoresSelecionados))
    formdata.append("password", senha)

    // cadastro de usuario
      api.post("usuario", formdata).then((response) =>{
        console.log(response)
        alert("Usuario criado com sucesso!😊")
        // Navegação para login
        // navigate("/login")
    }).catch((error)=>{
        console.log(error)
    })


  }

  // validação de senha
  let validateNum: RegExp = /^.*[+ 0-9]/;
  let validateUpper: RegExp = /^.*[A-Z]/m
  let validateLower: RegExp = /^.*[a-z]/m
  // teste ok


  const testNum = (validateNum.test(senha))
  const testUpper = (validateUpper.test(senha))
  const testLower = (validateLower.test(senha))
  const testLenght = senha.length > 7
  const testEqual = (confirmSenha == senha)
 // const [select, setSelect] = useState<string>(""); // state que contém a opção de setor selecionada pelo usuário

  function validate(event: any) {
    event.preventDefault()

    testNum && testLower && testUpper && testLenght ? (
      testEqual == false ?
        alert("Senhas não coincidem.")
        :
        cadastrarUsuario()
    ) : (
      alert("Senha não segue os padrões necessários. Verifique e tente novamente.")
    )
  }


  return (
    <>
      <section id="cadastro" className="cadastro">
        <form onSubmit={validate} className="aba_cadastro" method="post">
          <img className="logovw" alt="" src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/icon_vw.png?alt=media&token=0b056a56-9020-4d26-b3ed-cd7bdbd05b2b" />
          <h1>Cadastro</h1>

          <div className="id-input">
            <input
              id="vwid"
              name="vwid"
              className="input-cadastro"
              placeholder="VW ID"
              type="tel"
              maxLength={5}
              minLength={5}
              onChange={(event) => { setVwId(event.target.value) }}
              required
            />
            <label className="label" htmlFor="vwid">VW ID</label>
          </div>

          <div className="id-input">
            <input
              name="nome"
              id="nome"
              className="input-cadastro"
              placeholder="Nome completo"
              type="text"
              onChange={(event) => { setNome(event.target.value) }}
              required
            />
            <label className="label" htmlFor="nome">Nome completo</label>
          </div>

          <div className="id-input">
            <input
              name="email"
              id="email"
              className="input-cadastro"
              placeholder="E-mail"
              type="text"
              onChange={(event) => { setEmail(event.target.value) }}
              required
            />
            <label className="label" htmlFor="email">E-mail</label>
          </div>

          {/* <div className="id-input">
            <input
              name="supervisor"
              id="supervisor"
              className="input-cadastro"
              placeholder="Gestor imediato"
              type="text"
              onChange={(event) => { setGestorImediato(event.target.value) }}
              required
            />
            <label className="label" htmlFor="supervisor">Gestor imediato</label>
          </div>
        */}

          <div className="id-input">
            <input
              name="chapa"
              id="chapa"
              className="input-cadastro"
              placeholder="Código da chapa"
              type="tel"
              maxLength={3}
              minLength={3}
              onChange={(event) => { setChapa(event.target.value) }}
              required
            />
            <label className="label" htmlFor="chapa">Código da chapa</label>
          </div>

          <div className="id-input">
            <input
              name="data"
              id="data"
              className="input-cadastro"
              placeholder="Data de Nascimento"
              type="date"
              onChange={(event) => { setData(event.target.value) }}
              required
            />
            <label className="label" htmlFor="chapa">Data de Nascimento</label>
          </div>

          <select
            name=""
            id="cad_select_setor"
            onChange={(e) => setSelect(e.target.value)}
            defaultValue={select}
          >
            <option selected disabled value="">Selecione o setor</option>
            {
              sectores.map((sector: any, index: number) => {
                return <option key={index} value={sector}>{sector}</option>
              })
            }
          </select>

          <select
            name=""
            id="cad_select_usuario"
            onChange={(e) => setSelect(e.target.value)}
            defaultValue={select}
          >
            <option selected disabled value="">Tipo de Usuario</option>
            {
              tipoDeUsuarios.map((tipoDeUsuario: any, index: number) => {
                return <option key={index} value={tipoDeUsuario}>{tipoDeUsuario}</option>
              })
            }
          </select>

          <div className="id-input">
            <input
              name="imagem"
              id="imagem"
              className="input-cadastro"
              placeholder="Imagem"
              type="file"
              onChange={(event) => { setSenha(event.target.value) }}
              required
            // ref={() => console.log(inputRef)}
            />
            <label className="label" htmlFor="senha">Senha</label>
          </div>
          <div className="id-input">
            <input
              name="senha"
              id="senha"
              className="input-cadastro"
              placeholder="Senha"
              type="password"
              onChange={(event) => { setSenha(event.target.value) }}
              required
            // ref={() => console.log(inputRef)}
            />
            <label className="label" htmlFor="senha">Senha</label>
          </div>

          <div className="id-input">
            <input
              name="repeatsenha"
              id="repeatsenha"
              className="input-cadastro"
              placeholder="Repetir a senha"
              type="password"
              required
              onChange={(event) => { setConfirmSenha(event.target.value) }}
            />
            <label className="label" htmlFor="repeatsenha">Repetir a senha</label>
          </div>

          <div className="nivel_da_senha">
            {/* <span>Nível da senha</span>
            <div className="tudo">
              <div className=" linha">
                <div className="retangulo vermelho" />
                <span>Fraca</span>
              </div>
              <div className=" linha">
                <div className="retangulo amarelo" />
                <span>Média</span>
              </div>
              <div className=" linha">
                <div className="retangulo verde" />
                <span>Forte</span>
              </div>
            </div> */}
            <div className="teste">
              {/* <span>Sugestão de Senha:</span>
              <ul>
                <li>No mínimo 8 caracteres</li>
                <li>No mínimo uma letra maiúscula</li>
                <li>No mínimo uma letra minúscula</li>
                <li>No mínimo um número</li>
              </ul> */}
              <div>
                <button type="button" onClick={e => cadastrarUsuario()}
                // onClick={validate}
                >Cadastrar</button>
              </div>
            </div>
          </div>
        </form>
        <div className="aceite">
          <div>
            <input type="checkbox" id="check" name="checkbox" required />
            <label htmlFor="checkbox">
              Li e aceito os Termos e Condições da corporação
            </label>
          </div>
        </div>
      </section>




      {/* <div id="mostrar_overlay">
        <div id="overlay">
          <div className="overlay_div">
            <div>
              <h1>Confirmação do número de celular</h1>
              <span>
                Enviaremos um código ao seu número de celular registrado
                anteriormente
              </span>
            </div>
            <div>
              <img
                className="icon_celular"
                // src="../Cadastro/img/icon_celular.png"
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <div className="wrapper-container">
              <p>
                Digite o código que você recebeu no seu número de celular com
                final XX59
              </p>
              <div className="wrapper-pin">
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={1}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={2}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={3}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={4}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={5}
                />
                <input
                  className="campo_cod"
                  maxLength={1}
                  type="tel"
                  tabIndex={6}
                />
              </div>
            </div>
          </div>
          <a href="../Login/index.html">Enviar</a>
        </div>
        <a href="#">Voltar</a>
      </div> */}
    </>
  );
}
