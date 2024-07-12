'use client';

import styles from '@/styles/components/common/Header.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    if (openNav) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/img/logo.svg"
        alt="로고"
        width="40"
        height="40"
      />
      <button type="button" className={styles.navButton} onClick={toggleNav}>
        <Image src="/img/nav.svg" alt="네비게이션" width="30" height="26" />
      </button>
      {openNav && <nav className={styles.nav} />}
    </header>
  );
}
