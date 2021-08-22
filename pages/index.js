import Head from "next/head";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import About from "./About";
import Proyects from "./Proyects";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Nuñez</title>
        <meta name="description" content="Sebastian Nuñez - Web Developer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Container>
        <About />
        <Proyects />
        <Contact />
      </Container>
    </>
  );
}
