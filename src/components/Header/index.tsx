import ActiveLink from '../ActiveLink';

import styles from './styles.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo LFL" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/about" activeClassName={styles.active}>
            <a>Sobre</a>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName={styles.active}>
            <a>Contato</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
