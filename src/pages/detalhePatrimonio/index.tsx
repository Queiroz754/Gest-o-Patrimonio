import style from "./detalhePatrimonio.module.css"

const Login = () => {
return(

<>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Histórico/Detalhes - Gestão de Patrimônios</title>
            <link rel="stylesheet" href="detalhePatrimonio.css" />
            <header className={style.topbar}>
                <nav className={`${style.navbar} ${style.layout_guide}`} aria-label="Menu principal">
                    <a href="#" className={style.logo_link} aria-label="Página inicial">
                        <img src="../imgs/Logo Senai.png" alt="Logo SENAI" className={style.logo} />
                    </a>
                    <ul className={style.menu_list}>
                        <li>
                            <a href="#" className={style.menu_link}>
                                Ambientes
                                <i className={`${style.fa_solid} ${style.fa_chevron_down}`} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={style.menu_link}>
                                Patrimônios
                            </a>
                        </li>
                    </ul>
                    <section className={style.user_area} aria-label="Informações do usuário">
                        <button className={style.user_icon} aria-label="Abrir perfil do usuário">
                            <i className={`${style.fa_solid} ${style.fa_user}`} />
                        </button>
                        <div className={style.user_info}>
                            <strong>Késsia Milena</strong>
                            <span>kessia@sp.senai.br</span>
                        </div>
                        <button className={style.arrow_button} aria-label="Abrir opções da conta">
                            <i className={`${style.fa_solid} ${style.fa_chevron_down}`} />
                        </button>
                    </section>
                    <button className={style.hamburguer} aria-label="Abrir opções de menu ">
                        <i className={`${style.fa_solid} ${style.fa_bars}`} />
                    </button>
                </nav>
            </header>
            <main className={style.page_content}>
                <section className={`${style.page_detalhes} ${style.layout_guide}`} aria-labelledby={style.titulo_patrimonio}>
                    <a href="#" className={style.back_link}>
                        <i className={`${style.fa_solid} ${style.fa_arrow_left}`} />
                        Voltar
                    </a>
                    <h1 id={style.titulo_patrimonio}>Patrimônio: 1236808</h1>
                    <article className={style.patrimonio_card}>
                        <div className={style.patrimonio_content}>
                            <dl>
                                <dt>Denominação</dt>
                                <dd>NOTEBOOK ALTO DESEMPENHO P/ GAMER</dd>
                            </dl>
                            <dl>
                                <dt>Tipo</dt>
                                <dd>Mesa</dd>
                            </dl>
                            <dl>
                                <dt>Data transferência</dt>
                                <dd>
                                    <time dateTime="2026-02-09">09/02/2026</time>
                                </dd>
                            </dl>
                            <dl>
                                <dt>Local Atual</dt>
                                <dd>Sala 09/10</dd>
                            </dl>
                            <dl>
                                <dt>Status Atual</dt>
                                <dd>Ativo</dd>
                            </dl>
                        </div>
                    </article>
                </section>
                <section className={`${style.table_section} ${style.layout_guide}`} aria-label="Lista de histórico do patrimônio">
                    <h2>Histórico</h2>
                    <table className={style.history_table}>
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
                                <td data-label="Data">11/02/2026</td>
                                <td data-label="Tipo de movimentação">
                                    <span className={style.status_badge}>Transferência</span>
                                </td>
                                <td data-label="Origem">Sala 07/08</td>
                                <td data-label="Destino">Sala 09/10</td>
                                <td data-label="Responsável">Gustavo Lima</td>
                                <td data-label="Justificativa">
                                    <a href="#" aria-label="Ver justificativa da transferência">
                                        <i className={`${style.fa_solid} ${style.fa_circle_info}`} />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}
export default Login;