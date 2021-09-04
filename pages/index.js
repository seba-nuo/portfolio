import Head from "next/head";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Acerca from "./Acerca";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Nuñez</title>
        <meta name="description" content="Sebastian Nuñez - Web Developer" />
      </Head>
      <Navbar />
        <article className={styles.foto}>
          <h3 className={styles.subtitulo}>
            Puedo crear sitios web completos desde el diseño hasta producción.
          </h3>
        </article>
      <Container>
        <Acerca />
        <Proyectos />
        <Contacto />
      </Container>
    </>
  );
}
