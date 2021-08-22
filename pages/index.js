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
