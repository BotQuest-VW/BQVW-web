import './usuario.css'

import dashboard from './img/Dashboard Layout.png'
import usuarios from './img/Vector.png'
import dados from './img/dados.png'
import setaVoltar from './img/botao-de-seta-para-a-esquerda 1.png'

function Usuario() {
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
              <a href="#">Usuários</a>
            </div>
            <div className="Dados_aside">
              <img src={dados} alt="" />
              <a href="../Metricas/metricas.html">Metricas</a>
            </div>
            <div className="COnfiguração_aside">
              <img src={setaVoltar} alt="" />
              <a href="../../acesso ADM/index.html">Voltar ao Inicio</a>
            </div>
          </div>
        </aside>
        <section>
          <div className="menu_hamburgue">
            <img src="img/menu-hamburguer 1.png" alt="" />
          </div>
          <div className="Sub_titulos">
            <h1>Usuarios</h1>
            <div className="cad_pesquisa_usuario">
              <div className="butao_usuarios">
                <a href="#">Cadastrar usuário</a>
                <img src="img/usuario.png" alt="" />
              </div>
              <div className="butao_usuarios">
                <a href="#">Pesquisar usuário</a>
                <img src="img/lupa.png" alt="" />
              </div>
            </div>
          </div>
          <div className="Solicitacoes">
            <div className="linha_divisoria" />
            <table>
              <thead>
                <tr>
                  <th>Nome:</th>
                  <th>Avaliação</th>
                  <th>Setor:</th>
                  <th>Usuário ativo</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar.png" alt="Avatar da Luana M." />
                    Luana M.
                  </td>
                  <td>3.5</td>
                  <td>Adm</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (1).png" alt="Avatar da Luana M." />
                    Emerson A.
                  </td>
                  <td>4.0</td>
                  <td>TI</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (2).png" alt="Avatar da Luana M." />
                    Hellen M.
                  </td>
                  <td>3.5</td>
                  <td>FIN</td>
                  <td>
                    <div className="usuario_inativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (3).png" alt="Avatar da Luana M." />
                    Miguel G.
                  </td>
                  <td>3.5</td>
                  <td>Adm</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar.png" alt="Avatar da Luana M." />
                    Luana M.
                  </td>
                  <td>3.5</td>
                  <td>TI</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (1).png" alt="Avatar da Luana M." />
                    Emerson A.
                  </td>
                  <td>5.0</td>
                  <td>FIN</td>
                  <td>
                    <div className="usuario_inativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (2).png" alt="Avatar da Luana M." />
                    Hellen M.
                  </td>
                  <td>3.6</td>
                  <td>Adm</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (3).png" alt="Avatar da Luana M." />
                    Miguel G.
                  </td>
                  <td>4.7</td>
                  <td>TI</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar.png" alt="Avatar da Luana M." />
                    Luana M.
                  </td>
                  <td>3.5</td>
                  <td>FIN</td>
                  <td>
                    <div className="usuario_inativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (1).png" alt="Avatar da Luana M." />
                    Emerson A.
                  </td>
                  <td>4.7</td>
                  <td>Adm</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (2).png" alt="Avatar da Luana M." />
                    Hellen M.
                  </td>
                  <td>4.2</td>
                  <td>TI</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (3).png" alt="Avatar da Luana M." />
                    Miguel G.
                  </td>
                  <td>3.5</td>
                  <td>FIN</td>
                  <td>
                    <div className="usuario_inativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar.png" alt="Avatar da Luana M." />
                    Luana M.
                  </td>
                  <td>3.5</td>
                  <td>Adm</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (1).png" alt="Avatar da Luana M." />
                    Emerson A.
                  </td>
                  <td>4.9</td>
                  <td>TI</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (2).png" alt="Avatar da Luana M." />
                    Hellen M.
                  </td>
                  <td>4.3</td>
                  <td>FIN</td>
                  <td>
                    <div className="usuario_inativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="alinhamento_nome">
                    <img src="img/avatar (3).png" alt="Avatar da Luana M." />
                    Miguel G.
                  </td>
                  <td>3.5</td>
                  <td>Adm</td>
                  <td>
                    <div className="usuario_ativo" />
                  </td>
                  <td className="ajustar_lapis">
                    <img src="img/Vector (1).png" alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}
export default Usuario