import style  from "./containerLista.module.css";

const ContainerLista = () => {
    return (
        <>
            <section className={`${style.table_section} layout_guide`} aria-label="Lista de patrimonios">
                <table className={style.environment_table}>
                    <thead>
                        <tr>
                            <th>Patrimônio</th>
                            <th>Denominação</th>
                            <th>Tipo</th>
                            <th>Data transferência</th>
                            <th>Detalhes</th>
                            <th>Transferir</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1236808</td>
                            <td>MESA TRAPEZOIDAL DC-1987a</td>
                            <td>Mesa</td>
                            <td>11/02/26</td>
                            <td>
                                <a href="#" aria-label="Ver detalhes do patrimonio">
                                    <i className={`${style.fa_solid} ${style.fa_circle_info}`} />
                                </a>
                            </td>
                            <td>
                                <a href="#" aria-label="Transferir patrimonio">
                                    <i className={`${style.fa_solid} ${style.fa_arrow_right_arrow_left}`} />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}
export default ContainerLista;


