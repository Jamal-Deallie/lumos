import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Menu from '@/components/Menu';
import styles from '@/styles/components/MobileNavbar.module.scss';
import cn from 'classnames';
import Logo from '@/svgs/Logo';
import { links } from '@/data';

export default function MobileNavbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openShopMenu = () => setMenuIsOpen(!menuIsOpen);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const menu = useRef(null!);
  const router = useRouter();

  useEffect(() => {
    function onRouteChange() {
      setMenuIsOpen(false);
    }
    router.events.on('routeChangeStart', onRouteChange);

    return () => {
      router.events.off('routeChangeStart', onRouteChange);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let links = gsap.utils.toArray('.menu-link');

    let ctx = gsap.context(() => {
      if (tl.current) {
        tl.current
          // .fromTo(
          //   '#line1',
          //   { transform: 0 },
          //   {
          //     transform: 'rotate(45deg) translate(7px, 6px)',
          //   },
          //   0
          // )
          // .fromTo(
          //   '#line2',
          //   { transform: 0 },
          //   {
          //     opacity: 0,
          //   },
          //   0
          // )
          // .fromTo(
          //   '#line3',
          //   { transform: 0 },
          //   {
          //     transform: 'rotate(-45deg) translate(7px, -6px)',
          //   },
          //   0
          // )
          .fromTo(
            menu.current,
            { yPercent: 900, autoAlpha: 0 },
            {
              duration: 1,
              transformOrigin: 'right top',
              autoAlpha: 1,
              yPercent: 0,
              display: 'block',
              ease: 'power3.inOut',
            }
          )
          .fromTo(
            links,
            { yPercent: 100, opacity: 0 },
            {
              duration: 0.5,
              yPercent: 0,
              opacity: 1,
              stagger: {
                amount: 0.2,
              },
            }
          )
          .reverse();
      }
    });

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!menuIsOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, menuIsOpen]);

  return (
    <>
      <nav className={cn('primary-bg hide-desk', styles['navbar'])}>
        <div className={styles['inner']}>
          <div className={styles['menu-btn']}>
            <button
              role='button'
              id='btn'
              onClick={openShopMenu}
              className={styles.btn}>
              Button
            </button>
          </div>

          <Link href='/'>
          <div className={cn(styles['logo'], 'center-elem')}>
            <span className={styles['inner']}>
              <Logo />
            </span>
            <p className='secondary-clr txt-md'>lumos</p>
          </div>
        </Link>
        </div>
      </nav>

      <div className={cn(styles['menu'], 'secondary-bg')} ref={menu}>
        <ul>
          {links.map(({ id, label, path }) => {
            return (
              <li key={id} onClick={openShopMenu} className='menu-link'>
                <Link href={path} className='primary-clr'>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
