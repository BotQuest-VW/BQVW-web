import "./style.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "../../components/loader";

import CardTarefa from "../../components/cardTarefa";
import CardNovidade from "../../components/cardNovidade";

import api from "../../utils/api";
import PerfilUsuario from "../../components/perfilUsuario";
import DataAtual from "../../components/dataAtual";

// import logado from '../../main';

export default function AreaColaborador(props: any) {

  const [tarefas, setTarefas] = useState<any[]>([]);
  const [tarefasDois, setTarefasDois] = useState<any[]>([]);
  const [novidades, setNovidades] = useState<any[]>([]);
  const [titulo, setTitulo] = useState("");

  

  const { idUsuario } = useParams();

  const [nome, setNome] = useState<string>("");
  const [foto, setFoto] = useState<string>("");
  const [vwId, setVwId] = useState<string>("");

  function buscarUsuarioPorID() {
    api
      .get(`users/${idUsuario}`)
      .then((response: any) => {
        setNome(response.data.nome);
        setFoto(response.data.user_img);
        setVwId(response.data.vwId);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function listarTarefas() {
  //   api
  //     .get(`/tarefas`)
  //     .then((response: any) => {
  //       setTarefas(response.data);
  //     })
  //     .catch((error) =>
  //       console.log("Erro ao obter os dados das tarefas", error)
  //     );
  // }


  function listarTarefas() {
    // api
    //   .get(`users/${idUsuario}`)
    //   .then((response: any) => {
    //     setTarefas(response.data.tarefas);
    //     console.log(tarefas)
    //   })
    //   .catch((error) =>
    //     console.log("Erro ao obter os dados das tarefas", error)
    //   );

    // api.get("tarefas").then((response:any) => {
    //   setTarefasDois(response.data)
    // })
  }
  // LISTA TAREFAS JÁ CADASTRADAS NA API POR ID USER



  function listarNovidades() {
    api
      .get("/novidades")
      .then((response: any) => {
        setNovidades(response.data);
      })
      .catch((error) =>
        console.log("Erro ao obter os dados das novidades", error)
      );
  }

  function addTask(event: any) {
    event.preventDefault();
    const formdata = new FormData();

    formdata.append("titulo", titulo);

    api
      .post("tarefas", formdata)
      .then((response: any) => {
        console.log(response);
        alert("Tarefa adicionada!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

    api.post;
  }
  // VAI ADICIONAR AS TAREFAS DO CAMINHO "API/TAREFAS"
  // UTILIZANDO POR ENQUANTO APENAS PARA DEMONSTRAÇÃO DO SITE, NÃO ESTÁ FUNCIONAL


  // function addTask(event: any) {
  //   event.preventDefault();
    
  //   api.patch(`users/${idUsuario}`, {
  //     "tarefas": [
  //       {"titulo": titulo}
  //     ]
  //   }).then((response:any) => {
  //       console.log(response)
  //       window.location.reload()
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   api.post;
  // }

  useEffect(() => {
    listarTarefas();
    listarNovidades();
    buscarUsuarioPorID();
  }, []);

  // vvvvvvvvvvvvvv FUNÇÃO LOADER
  const [visible, setVisible] = useState(false);

  const handleTime = () => setTimeout(() => setVisible(true), 1500);
  handleTime();
  // ^^^^^^^^^^^^^^ FUNÇÃO LOADER

  return (
    <main id="area_colaborador">
      {props.user.logado ? (
        <>
          {visible == true ? (
            <>
              <section className="left">
                <DataAtual/>
                <div>
                  <div className="card">
                    <h2
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      Minhas tarefas
                    </h2>
                    <div
                      className="listaTask"
                      style={{
                        height: "85%",
                      }}
                    >
                      <ul
                        id="listaTarefas"
                        style={{
                          marginRight: "15px",
                        }}
                      >
                        {tarefas.map((tarefa: any, index: number) => {
                          return (
                            <li key={index}>
                              <CardTarefa
                                titulo={tarefa.titulo}
                                id={tarefa.id}
                              />
                            </li>
                          );
                        })}
                        {tarefasDois.map((tarefaDois: any, index: number) => {
                          return (
                            <li key={index}>
                              <CardTarefa
                                titulo={tarefaDois.titulo}
                                id={tarefaDois.id}
                              />
                            </li>
                          );
                        })}
                        <div id="addTask" className="addTask">
                          <form
                            id="taskForm"
                            action=""
                            method="post"
                            onSubmit={addTask}
                          >
                            <label htmlFor="task"></label>
                            <input
                              id="task"
                              name="campo_task"
                              type="text"
                              placeholder="Título da tarefa"
                              onChange={(e) => {
                                setTitulo(e.target.value);
                              }}
                              required
                            />
                            <button>Adicionar</button>
                          </form>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <h2
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      Novidades
                    </h2>
                    <div
                      className="listaNews"
                      style={{
                        listStyleType: "none",
                        height: "85%",
                      }}
                    >
                      <ul
                        style={{
                          marginRight: "15px",
                        }}
                      >
                        {novidades.map((novidade: any, index: number) => {
                          return (
                            <li key={index}>
                              <CardNovidade
                                titulo={novidade.titulo}
                                id={novidade.id}
                                link={novidade.link}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <PerfilUsuario foto={foto} nome={nome} vwId={vwId} />
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
    </main>
  );
}
