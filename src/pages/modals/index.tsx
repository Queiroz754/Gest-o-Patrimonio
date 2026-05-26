import style from "./modeloModal.module.css";

const ModeloModal = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Modais</title>

      {/* MODAL IMPORTAR */}
      <section className={style.modal_overlay}>
        <article className={style.modal_container} id="modalImportar">
          <a href="#" className={style.modal_close}>x</a>

          <h1 className={style.modal_title}>
            Importar novos patrimônios
          </h1>

          <form className={style.modal_form}>
            <div className={style.modal_field}>
              <label htmlFor="numeroPatrimonio">
                Número do patrimônio
              </label>
              <input 
                type="text" 
                id="numeroPatrimonio"
                placeholder="1245769"
              />
            </div>

            <div className={style.modal_field}>
              <label htmlFor="denominacaoPatrimonio">
                Denominação
              </label>
              <input 
                type="text"
                id="denominacaoPatrimonio"
                placeholder="CADEIRA GIRATÓRIA EM POLIPROPILENO PRETO"
              />
            </div>

            <button type="submit" className={style.modal_button}>
              SALVAR IMPORTAÇÃO
            </button>
          </form>
        </article>
      </section>

      {/* MODAL TRANSFERIR */}
      <section className={style.modal_overlay}>
        <article className={style.modal_container} id="modalTransferir">
          <a href="#" className={style.modal_close}>x</a>

          <h1 className={style.modal_title}>
            Transferir os patrimônios
          </h1>

          <form className={style.modal_form}>
            <div className={style.modal_field}>
              <label htmlFor="ambienteTransferencia">
                Ambiente
              </label>
              <select id="ambienteTransferencia">
                <option>Manutenção</option>
                <option>Sala XX</option>
                <option>Sala XX</option>
              </select>
            </div>

            <div className={style.modal_field}>
              <label htmlFor="motivoTransferencia">
                Motivo da transferência
              </label>
              <textarea 
                id="motivoTransferencia"
                placeholder="Lorem"
              />
            </div>

            <button type="submit" className={style.modal_button}>
              TRANSFERIR
            </button>
          </form>
        </article>
      </section>

      {/* MODAL JUSTIFICATIVA */}
      <section className={style.modal_overlay}>
        <article className={`${style.modal_container} ${style.modal_justificativa}`}>
          <a href="#" className={style.modal_close}>x</a>

          <h1 className={style.modal_title}>
            Justificativa
          </h1>

          <p className={style.modal_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis, quasi distinctio! Temporibus similique expedita 
            laboriosam, assumenda officia veritatis amet doloremque esse 
            obcaecati repudiandae architecto in sed facilis quas harum.
          </p>
        </article>
      </section>
    </>
  );
};

export default ModeloModal;