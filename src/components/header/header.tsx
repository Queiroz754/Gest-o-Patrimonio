import secureLocalStorage from "react-secure-storage"
import style from "./header.module.css"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode";

type usuario = {
  nomeTipoUsuario: string,
  nome: string,
  email: string,
}




const Header = ({ nomeTipoUsuario, nome: propNome, email: propEmail }: usuario) => {

  const [usuarioDados, setUsuarioDados] = useState<any>(null);

  async function getIdToken() {
    const token = secureLocalStorage.getItem("Token");


    if (!token) {
      console.log("Token não encontrado")
      return null;
    }

    try {
      const usuario = jwtDecode(token.toString()) as any;
      console.log(usuario)

      const caminho = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/";

      const usuarioFormatado = {
        id: usuario[caminho + "nameidentifier"],
        nome: usuario[caminho + "name"],
        email: usuario[caminho + "emailaddress"],
        cargo: usuario["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        nif: usuario["NIF"]
      };

      setUsuarioDados(usuarioFormatado);
    } catch (error: any) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getIdToken();
  }, [])

  return (
    <>
      <header className={style.topbar}>
        <nav className={`${style.navbar} layout_guide`} aria-label="Menu principal">
          <a href="#" className={style.logo_link} aria-label="Página inicial">
            <img src="../imgs/Logo Senai.png" alt="Logo SENAI" className={style.logo} />
          </a>

          <ul className={style.menu_list}>
            <li>
              {nomeTipoUsuario === 'Coordenador' ? (<select name="" id="" className={style.menu_link}>
                Ambiente
                <option value="">Ambientes</option>
                <option value="">Área</option>
                <option value="">Local</option>
                <i className="fa-solid fa-chevron-down"/>
              </select>) : (
                <a href="" >Ambiente</a>
              )}
            </li>

            <li>
              {nomeTipoUsuario === 'Coordenador' ? (
                <a href="#usuarios">Usuários</a>
              ) : (
                <a href="#responsaveis">Responsáveis</a>
              )}
            </li>

            <li>
              <a href="#patrimonios" className={style.menu_link}>Patrimônios</a>
            </li>
          </ul>

          <section className={style.user_area} aria-label="Informações do usuário">
            <button className={style.user_icon} aria-label="Abrir perfil do usuário">
              <i className="fa-solid fa-user" />
            </button>

            <div className={style.user_info}>
              <strong>{usuarioDados?.nome}</strong>
              <span>{usuarioDados?.email}</span>
            </div>

            <button className={style.arrow_button} aria-label="Abrir opções da conta">
              <i className={`${style.fa_solid} ${style.fa_chevron_down}`} />
            </button>
          </section>

          <button className={style.hamburguer} aria-label="Abrir opções de menu ">
            <i className={`${style.fa_solid} ${style.fa_bars}`} />
          </button>
        </nav>
      </header></>
  )
}

export default Header;