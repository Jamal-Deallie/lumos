import { useState } from 'react';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import Logo from '@/svgs/Logo';
import cn from 'classnames';
import styles from '@/styles/components/DesktopNavbar.module.scss';
import { links } from '@/data';
import { LinkButton } from '@/components/Button';
export default function DesktopNavbar() {
  return (
    <nav className={cn('primary-bg hide-mobile', styles['container'])}>
      <div className={styles['wrap']}>
        <div className={styles.links}>
          {links.map(({ id, label, path }) => {
            return (
              <NavLink href={path} key={id}>
                {label}
              </NavLink>
            );
          })}
        </div>
        <Link href='/'>
          <div className={cn(styles['logo'], 'center-elem')}>
            <span className={styles['inner']}>
              <Logo />
            </span>
            <p className='secondary-clr txt-md'>lumos</p>
          </div>
        </Link>
        <div>
          <LinkButton
            size='sm'
            variant='outline-secondary'
            txtClr='#000'
            hoverTxt='#fffcf8'
            href='/contact'>
            Contact
          </LinkButton>
        </div>
      </div>
    </nav>
  );
}
