import "@/styles/globals.css"
import "@fortawesome/free-solid-svg-icons";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-padrao",
});

export default function App({ Component, pageProps }: AppProps)
{
    return (
        <main className={`${montserrat.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}