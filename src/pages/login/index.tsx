import { useState } from "react";
import style from "./login.module.css";
import { useRouter } from "next/router";
import { login } from "../api/authService";
import { erro, notificacao } from "@/utils/toast";

const Login = () => {
  const [nif,setNif] = useState<string>("");
  const [senha,setSenha] = useState<string>("");

  const router = useRouter();

  async function autenticar(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
        try {
            await login(nif, senha);
            notificacao("Login bem-sucedido.")
            setTimeout(() => {
                router.push("/listaPatrimoniosPorSala");
            },2000);
        }
        catch (error: any) {
            erro("Login Inválido.")
        }
  }

  return (
    <>
      <main className={style.login_page}>
        <section className={style.login_banner} aria-label="Apresentação do sistema">
          <img
            src="../imgs/Imagem do login.png"
            alt="Imagem de fundo relacionada à tecnologia"
            className={style.banner_image}
          />
          <div className={style.banner_overlay} />
          <div className={style.banner_content}>
            <img
              src="../imgs/Logo Senai.png"
              alt="Logo do SENAI"
              className={style.senai_logo}
            />
            <h2>Gestão de patrimônios</h2>
            <p className={style.banner_content_text}>
              Controle, organização e transparência do patrimônio com eficiência.
            </p>
            <p />
          </div>
        </section>
        <section className={style.login_area} aria-label="Formulário de login">
          <form className={style.login_form} onSubmit={autenticar} >
            <h1>Login</h1>
            <div className={style.form_group}>
              <label htmlFor="nif">NIF:</label>
              <input
                onChange={(e) => setNif(e.target.value)}
                value={nif}
                type="text"
                id="nif"
                name="nif"
                placeholder="Insira o seu NIF"
                required
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="senha">Senha:</label>
              <div className={style.password_field}>
                <input
                  onChange={(e) => setSenha(e.target.value)}
                  value={senha}
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Insira a sua senha"
                  required
                />
                <button
                  type="button"
                  className={style.show_password}
                  aria-label="Mostrar senha"
                >
                  👁
                </button>
              </div>
            </div>
            <button type="submit" className={style.login_button}>
              Entrar
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;