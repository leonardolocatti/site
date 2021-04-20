import Head from 'next/head';
import { SiLinkedin, SiFacebook, SiGithub } from 'react-icons/si';

import styles from '../styles/pages/contact.module.scss';

export default function Contact(): JSX.Element {
  return (
    <>
      <Head>
        <title>Contato | Leonardo Locatti - Dev Web</title>
      </Head>

      <main className={styles.contactContainer}>
        <article className={styles.contactContent}>
          <h1>Contato</h1>
          <p>
            Tem alguma pergunta, sugestão ou simplesmente quer mandar um olá?
          </p>
          <p>
            Sinta-se à vontade para enviar um e-mail para{' '}
            <a href="mailto:contato@llocatti.con.br">contato@llocatti.com.br</a>
            .
          </p>

          <div>
            <p>Ou também pode entrar em contato por alguma rede social:</p>
            <div className={styles.socialMedias}>
              <a href="/">
                <SiLinkedin />
                LinkedIn
              </a>
              <a href="/">
                <SiFacebook />
                Facebook
              </a>
              <a href="/">
                <SiGithub />
                GitHub
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
