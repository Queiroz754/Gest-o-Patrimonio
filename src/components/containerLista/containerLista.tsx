import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./containerLista.module.css";
import { faArrowLeft, faArrowRightArrowLeft, faArrowsLeftRight, faInfo } from "@fortawesome/free-solid-svg-icons";



interface dadosAmbiente {
    nomeLocal: string,
    areaID: string,
    responsavel: string, 
}

interface dadosPatrimonioSala{
    numeroPatrimonioID: string,
    denominacao: string,
}

interface dadosDetalhePatrimônio{
    denominacao: string,
    // Origem vem de patrimonio
    localizacaoID: string, 
    // Responsavel vem de localizacao
    responsavel: string,
};
type ListaProps =  {page:"ambiente"; dados: dadosAmbiente}
                   | {page: "patrimonioSala"; dados: dadosPatrimonioSala}
                   | {page: "detalhe"; dados: dadosDetalhePatrimônio}

const ContainerLista = ({ page }: ListaProps, ) => {
    return (
        <>

            {page === "ambiente" && (
    <section className="layout_guide">
        <table className={style.list_table}>
            <thead>
                <tr>
                    <th>Local</th>
                    <th>Área</th>
                    <th>Responsável</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Local">Sala 30/31 (anfiteatro)</td>
                    <td data-label="Área">Andar 1</td>
                    <td data-label="Responsável">Samanta Melissa</td>
                </tr>
            </tbody>
        </table>
    </section>
)}
{page === "patrimonioSala" && (
    <section className="layout_guide">
        <table className={style.list_table}>
            <thead>
                <tr>
                    <th>Patrimônio</th>
                    <th>Denominação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Patrimônio">1236808</td>
                    <td data-label="Denominação">MESA TRAPEZOIDAL DC-1987</td>
                    <td data-label="Data transferência">11/02/26</td>
                    <td data-label="Ações">
                        <a href="#" aria-label="Ver detalhes">
                            <FontAwesomeIcon icon={faInfo}/>
                        </a>
                        <a href="#" aria-label="Transferir patrimônio" style={{ marginLeft: '12px' }}>
                            <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
)}

{page === "detalhe" && (
    <section className="layout_guide">
        <table className={style.list_table}>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Tipo de movimentação</th>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>Responsável</th>
                    <th>Justificativa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Data">11/02/26</td>
                    <td data-label="Tipo de movimentação">
                        <span className={style.status_badge}>Transferência</span>
                    </td>
                    <td data-label="Origem">Sala 07/08</td>
                    <td data-label="Destino">Sala 09/10</td>
                    <td data-label="Responsável">Gustavo Lima</td>
                    <td data-label="Justificativa">
                        <a href="#" aria-label="Ver justificativa">
                            <FontAwesomeIcon icon={faInfo}/>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
)}  
            

        </>
    )
}
export default ContainerLista;


