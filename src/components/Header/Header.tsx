import { ReactNode } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  children: ReactNode,
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <h1 className={styles.header}>
      {children}
    </h1>
  )
};
