import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ActiveLink from '../ActiveLink';

import styles from './styles.module.scss';

export default function Header(): JSX.Element {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header
      className={`${styles.headerContainer} ${
        isMenuActive ? styles.activeMenu : ''
      }`}
    >
      <div
        className={`${styles.headerContent} ${
          isMenuActive ? styles.activeMenu : ''
        }`}
      >
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
        {isMenuActive ? (
          <FiX onClick={() => setIsMenuActive(false)} />
        ) : (
          <FiMenu onClick={() => setIsMenuActive(true)} />
        )}
      </div>
    </header>
  );
}
