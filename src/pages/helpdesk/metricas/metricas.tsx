import './metricas.css'

import dashboard from './img/Dashboard Layout.png'
import usuarios from './img/Vector.png'
import dados from './img/dados.png'
import setaVoltar from './img/botao-de-seta-para-a-esquerda 1.png'


function Metricas() {
  return (
    <>


      <main>
        <aside>
          <div className="aside_position">
            <div className="Dashboard_aside">
              <img src={dashboard} alt="" />
              <a href="../Index.html">Tela Inicial</a>
            </div>
            <div className="Usuario_aside">
              <img src={usuarios} alt="" />
              <a href="../Usuario/usuario.html">Usuários</a>
            </div>
            <div className="Dados_aside">
              <img src={dados} alt="" />
              <a href="#">Metricas</a>
            </div>
            <div className="COnfiguração_aside">
              <img src={setaVoltar} alt="" />
              <a href="../../acesso ADM/index.html">Voltar ao Inicio</a>
            </div>
          </div>
        </aside>
        <section>
          <div className="Metricas">
            <img src="img/menu-hamburguer 1.png" alt="" />
            <h1>Métricas</h1>
          </div>
          <div className="todos_quadrados">
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>NPS</h2>
              </div>
              <p>
                Pesquisa quanti-qualitativa, fornece um panorama sobre a fidelidade
                dos seus clientes e quão satisfeitos estão com o que oferecemos.
              </p>
            </div>
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>CSAT</h2>
              </div>
              <p>Pequeno questionário (survey) de escala.</p>
            </div>
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>Pesquisa de cultura</h2>
              </div>
              <p>Questionário dedicado ao funcionário.</p>
            </div>
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>Usuários</h2>
              </div>
              <p>Informações sobre os usuários na plataforma.</p>
            </div>
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>Acessos</h2>
              </div>
              <p>Informações sobre a utilização do acessos dos usuários.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Metricas