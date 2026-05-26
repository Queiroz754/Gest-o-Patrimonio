import style from "./listaLocais.module.css";

const ListaLocais = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Locais - Gestão de Patrimônios</title>
      <link rel="stylesheet" href="listaLocais.css" />
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
        <section
          className={`${style.page_header} ${style.layout_guide}`}
          aria-labelledby={style.titulo_ambientes}
        >
          <h1 id={style.titulo_ambientes}>Ambientes</h1>
          <form className={style.search_area} role="search">
            <label htmlFor={style.pesquisa_ambiente} className={style.sr_only}>
              Pesquisar ambiente
            </label>
            <input
              type="search"
              id={style.pesquisa_ambiente}
              name="pesquisaAmbiente"
              placeholder="Pesquise o ambiente"
            />
            <button
              type="button"
              className={style.filter_button}
              aria-label="Filtrar ambientes"
            >
              <i className={`${style.fa_solid} ${style.fa_sliders}`} />
            </button>
          </form>
        </section>
        <section
          className={`${style.table_section} ${style.layout_guide}`}
          aria-label="Lista de ambientes"
        >
          <table className={style.environment_table}>
            <thead>
              <tr>
                <th>Local</th>
                <th>Responsável</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sala 30/31 (anfiteatro)</td>
                <td>Samanta Melissa</td>
                <td>
                  <a href="#" aria-label="Ver detalhes da Sala 30/31">
                    <i className={`${style.fa_solid} ${style.fa_circle_info}`} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <nav className={style.pagination} aria-label="Paginação">
          <button
            type="button"
            className={style.pagination_button}
            aria-label="Página anterior"
          >
            ‹
          </button>
          <a href="#" className={`${style.pagination_link} ${style.current}`} aria-current="page">
            1
          </a>
          <a href="#" className={style.pagination_link}>
            2
          </a>
          <a href="#" className={style.pagination_link}>
            3
          </a>
          <button
            type="button"
            className={style.pagination_button}
            aria-label="Próxima página"
          >
            ›
          </button>
        </nav>
      </main>
    </>
  );
};

export default ListaLocais;