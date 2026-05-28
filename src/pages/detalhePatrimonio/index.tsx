import Header from "@/components/header/header";
import style from "./detalhePatrimonio.module.css"
import ContainerLista from "@/components/containerLista/containerLista";

const Login = () => {
return(

<>
            <Header/>
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
                    <ContainerLista
                    page="detalhe"/>
                </section>
            </main>
        </>
    )
}
export default Login;