import secureLocalStorage from "react-secure-storage"
import style from "./header.module.css"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronCircleDown, faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";

type usuarioToken = {
  //* CARGO
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string,
  //* ID
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string,
  //* NOME
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string,
  //* EMAIL 
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string,
  //* NIF
  "NIF": string,
}

const Header = () => {

  // const [usuarioDados, setUsuarioDados] = useState<usuarioToken>();

  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");

  async function getIdToken() {
    const token = secureLocalStorage.getItem("Token") as string;


    if (!token) {
      console.log("Token não encontrado")
      return null;
    }

    try {
      const objToken = jwtDecode<usuarioToken>(token);
      console.log(objToken)


      const tokenUsuario = {
        id: objToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
        nome: objToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        email: objToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
        cargo: objToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        nif: objToken["NIF"]
      };

      setNome(tokenUsuario.nome);
      setEmail(tokenUsuario.email);
      setCargo(tokenUsuario.cargo);
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
              {cargo === 'Coordenador' ? (<select name="" id="" className={style.menu_link}>
                Ambiente
                <option value="">Ambientes</option>
                <option value="">Área</option>
                <option value="">Local</option>
                <i className="fa-solid fa-chevron-down"/>
              </select>) : (
                <a href="" className={style.menu_link} >Ambiente</a>
              )}
            </li>

            <li>
              {cargo === 'Coordenador' ? (
                <a href="#usuarios" className={style.menu_link} >Usuários</a>
              ) : (
                <a href="#responsaveis" className={style.menu_link}>Responsáveis</a>
              )}
            </li>

            <li>
              <a href="#patrimonios" className={style.menu_link}>Patrimônios</a>
            </li>
          </ul>

          <section className={style.user_area} aria-label="Informações do usuário">
            <button className={style.user_icon} aria-label="Abrir perfil do usuário">
              <FontAwesomeIcon icon={faUser}/>
            </button>
            <div className={style.user_info}>
              <strong>{nome}</strong>
              <span>{email}</span>
            </div>

            <button className={style.arrow_button} aria-label="Abrir opções da conta">
            <FontAwesomeIcon icon={faChevronDown}/>  
            </button>
          </section>

          <button className={style.hamburguer} aria-label="Abrir opções de menu ">
            <FontAwesomeIcon icon={faBars}/>
          </button>
         </nav> 
      </header></>
  )
}

export default Header;