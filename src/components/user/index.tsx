import lapis from "../../pages/helpdesk/usuarios/img/Vector (1).png"


export default function User(props:any){
    return(
        <>
            <td className="alinhamento_nome">
                <img src={props.avatar} alt="Avatar do usuário" />
                {props.nome}
            </td>
            <td>{props.id}</td>
            <td>{props.setor}</td>
            <td>
                <div className="usuario_ativo" />
            </td>
            <td className="ajustar_lapis">
                <img src={lapis} alt="" />
            </td>
        </>
    )
}