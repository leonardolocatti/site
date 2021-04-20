import Head from 'next/head';
import { SiReact, SiNextDotJs, SiNodeDotJs, SiJava } from 'react-icons/si';

import styles from '../styles/pages/about.module.scss';

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sobre | Leonardo Locatti - Dev Web</title>
      </Head>

      <main className={styles.aboutContainer}>
        <article className={styles.aboutContent}>
          <h1>Sobre</h1>
          <p>
            Olá! Meu nome é Leonardo e sou desenvolvedor de sites e sistemas
            Web.
          </p>
          <p>
            Estou sempre estudando para aperfeiçoar os conhecimentos e estar
            antenado nas novas soluções e tecnologias.
          </p>
          <p>
            Quando não estou trabalhando gosto de gastar meu tempo livre
            programando nos meus projetos pessoais, assistindo séries e lendo
            livros sobre ficções científicas e tecnologia.
          </p>
          <p>Algumas tecnologias que tenho utilizado recentemente:</p>
          <div>
            <span>
              <SiReact />
              React
            </span>
            <span>
              <SiNextDotJs />
              Next
            </span>
            <span>
              <SiNodeDotJs />
              Node
            </span>
            <span>
              <SiJava />
              Java
            </span>
          </div>
        </article>
      </main>
    </>
  );
}
