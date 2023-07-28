import Link from 'next/link';
import EmailForm from '@/components/EmailForm';
import { links, support } from '@/data';
import styles from '@/styles/components/Footer.module.scss';
import cn from 'classnames';
import Instagram from '@/svgs/Instagram';
import Facebook from '@/svgs/Facebook';
import Twitter from '@/svgs/Twitter';
import Logo from '@/svgs/Logo';

export default function Footer() {
  return (
    <footer className={cn(styles['footer'], 'secondary-bg primary-clr')}>
      <div className='grid-cont mt-lg-64 mb-lg-48 my-sm-32'>
        <div className={styles['link-cont']}>
          <span className='primary-clr title-xs  mb-lg-16 mb-sm-1'>
            Links
          </span>
          <ul className='sm-mt-2 lg-mt-2'>
            {links.map(({ id, path, label }) => {
              return (
                <li key={id} className='primary-clr'>
                  <Link href={path} className='txt-md body-ft'>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles['visit-cont']}>
          <span className='primary-clr title-xs mb-lg-16 mb-sm-16'>
            Visit
          </span>
          <ul className='sm-mt-3 lg-mt-3 primary-clr'>
            <li className='primary-clr'>
              <p className='txt-md'>
                123 Main Street
                <br />
                Dallas, TX, 75001
              </p>
            </li>
            <li>
              <p className='txt-md'>Hours: Daily 8am - 5pm EST</p>
            </li>
            <li>
              <p className='txt-md'>customerservice@lumos.com</p>
            </li>
            <li>
              <p className='txt-md'>(123)-123-4567</p>
            </li>
          </ul>
        </div>
        <div className={styles['logo-cont']}>
          <div className={styles['logo-inner']}>
            <div className={styles['logo']}>
              <Logo />
            </div>
            <p className='txt-md mt-lg-8 mt-sm-8'>
              Lighting Brilliance, Illuminating Spaces
            </p>
          </div>
        </div>
      </div>

      <div className={cn(styles['bottom-cont'])}>
        <div className='grid-cont my-lg-24 my-sm-16'>
          <div className={styles['support']}>
            {support.map(({ id, path, label }) => {
              return (
                <div key={id} className='clr-secondary'>
                  <Link href={path} className='body-ft txt-md'>
                    {label}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={styles['rights']}>
            <p className='txt-md'>@2023 Lumos. All Rights Reserved.</p>
          </div>

          <div className={styles['social']}>
            <Instagram />

            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
