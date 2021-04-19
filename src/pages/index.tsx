import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/pages/home.module.scss';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Leonardo Locatti - Dev Web</title>
      </Head>

      <main className={styles.homeContainer}>
        <section className={styles.homeContent}>
          <h1>Leonardo Locatti</h1>

          <span>Desenvolvedor Web</span>

          <Link href="/contact">
            <a>Entrar em contato</a>
          </Link>
        </section>

        <img src="/images/profile.jpeg" alt="Leonardo Locatti" />
      </main>
    </>
  );
}
