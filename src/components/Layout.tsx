import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/components/Layout.module.scss';
import cn from 'classnames';
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles['layout']}>
      <Navbar />
      <main className={cn(styles['main-wrap'], 'primary-bg')}>{children}</main>
      <Footer />
    </div>
  );
}
