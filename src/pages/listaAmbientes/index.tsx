import Header from "@/components/header/header";
import style from "./listaLocais.module.css";
import ContainerLista from "@/components/containerLista/containerLista";

const ListaLocais = () => {
  return (
    <>
      <Header/>
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
          <ContainerLista
          page="ambiente"/>
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