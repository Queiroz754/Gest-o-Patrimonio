import Header from "@/components/header/header";
import style from "./listaPatrimoniosPorSala.module.css";
import { useState } from "react";
import { useParams } from "next/navigation";
import { getUsuarioId } from "../api/usuarioService";


interface Usuario {
  nomeTipoUsuario: string,
  nome: string,
  email: string
}



const ListaPatrimoniosPorSala = () => {
  return (
    <>
      <Header
      nomeTipoUsuario=""
      nome="" 
      email=""
      />
      <main className={style.page_content}>
        <section className={`${style.page_header} layout_guide`} aria-labelledby={style.titulo_patrimonios}>
          <h1 id={style.titulo_patrimonios}>Patrimônios: Sala 09/10</h1>

          <form className={style.search_area} role="search">
            <label htmlFor={style.pesquisa_ambiente} className={style.sr_only}>Pesquisar patrimônios</label>

            <input type="search" id={style.pesquisa_ambiente} name="pesquisaAmbiente" placeholder="Pesquise o ambiente" />

            <button type="button" className={style.filter_button} aria-label="Filtrar patrimonios">
              <i className={`${style.fa_solid} ${style.fa_sliders}`} />
            </button>
          </form>
        </section>

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

        <nav className={style.pagination} aria-label="Paginação">
          <button type="button" className={style.pagination_button} aria-label="Página anterior">
            ‹
          </button>

          <a href="#" className={`${style.pagination_link} ${style.current}`} aria-current="page">1</a>
          <a href="#" className={style.pagination_link}>2</a>
          <a href="#" className={style.pagination_link}>3</a>

          <button type="button" className={style.pagination_button} aria-label="Próxima página">
            ›
          </button>
        </nav>
      </main>
    </>
  );
};

export default ListaPatrimoniosPorSala;