import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./containerLista.module.css";
import { faArrowRightArrowLeft, faInfo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { verificarAutenticacao } from "@/utils/auth";
import { getLocal } from "@/pages/api/locaisService";
import { getArea } from "@/pages/api/areaService";
import { getPatrimonio } from "@/pages/api/patrimonioService"; 

interface DadosAmbiente {
    localizacaoID: string,
    nomeLocal: string,
    areaID: string,
    nomeArea?: string,
    responsavel: string,
}

interface DadosPatrimonioSala {
    numeroPatrimonioID: string, 
    denominacao: string,
}

interface DadosDetalhePatrimônio {
    denominacao: string,
    localizacaoID: string,
    responsavel: string,
}

type ListaProps = { page: string; dados?: any };

const ContainerLista = ({ page }: ListaProps) => {

    const [dadosAmbiente, setdadosAmbiente] = useState<DadosAmbiente[]>([]);
    const [dadosPatrimonioSala, setdadosPatrimonioSala] = useState<DadosPatrimonioSala[]>([]);
    
    const estaLogado = verificarAutenticacao();
    const [pesquisa, setPesquisa] = useState("");

    async function listaAmbiente() {
        try {
            const responseLocal: any = await getLocal();
            const responseArea: any = await getArea();

            const locais = responseLocal.data ? responseLocal.data : responseLocal;
            const areas = responseArea.data ? responseArea.data : responseArea;

            const ambienteFormatado: DadosAmbiente[] = locais.map((local: any) => {
                const areaCorrespondente = areas.find((area: any) => area.areaID === local.areaID);
                return {
                    localizacaoID: local.localizacaoID,
                    nomeLocal: local.nomeLocal,
                    areaID: local.areaID,
                    responsavel: local.responsavel,
                    nomeArea: areaCorrespondente ? areaCorrespondente.nomeArea : "Sem Área"
                };
            });

            setdadosAmbiente(ambienteFormatado);
        } catch (error) {
            console.error("Erro ao carregar ambientes:", error);
        }
    }

    async function listaPatrimonioPorSala() {
        try {
            const patrimonio = await getPatrimonio()
            setdadosPatrimonioSala(patrimonio)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (page === "ambiente") {
            listaAmbiente();
        } else if (page === "patrimonioSala") {
            listaPatrimonioPorSala();
        }
    }, [page]);

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
                            {dadosAmbiente.map((item) => (
                                <tr key={item.localizacaoID}>
                                    <td data-label="Local">{item.nomeLocal}</td>
                                    <td data-label="Área">{item.nomeArea}</td>
                                    <td data-label="Responsável">{item.responsavel}</td>
                                </tr>
                            ))}
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
                            {dadosPatrimonioSala.map((item, index) => (
                                <tr key={index}>
                                    <td data-label="Patrimônio">{item.numeroPatrimonioID}</td>
                                    <td data-label="Denominação">{item.denominacao}</td>
                                    <td data-label="Ações">
                                        <a href="#" aria-label="Ver detalhes">
                                            <FontAwesomeIcon icon={faInfo} />
                                        </a>
                                        <a href="#" aria-label="Transferir patrimônio" style={{ marginLeft: '12px' }}>
                                            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </>
    );
};

export default ContainerLista;