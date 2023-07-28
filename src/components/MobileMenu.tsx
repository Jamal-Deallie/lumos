'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { links } from '@/data';
import styles from '@/styles/components/Menu.module.scss';

export default function Menus() {
  const root = useRef(null!);
  const openShopMenu = () => setNavIsOpen(!navIsOpen);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onRouteChange() {
      setNavIsOpen(false);
    }

    router.events.on('routeChangeStart', onRouteChange);

    return () => {
      router.events.off('routeChangeStart', onRouteChange);
    };
  }, []);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let links = gsap.utils.toArray('.link-item');

    let ctx = gsap.context(() => {
      if (tl.current) {
        tl.current
          .fromTo(
            root.current,
            { autoAlpha: 0, yPercent: 200 },
            {
              duration: 1,
              autoAlpha: 1,
              yPercent: 0,
              display: 'block',
              ease: 'power3.inOut',
            }
          )
          .fromTo(
            links,
            { autoAlpha: 0, yPercent: 200 },
            {
              duration: 0.65,
              yPercent: 0,
              autoAlpha: 1,
              stagger: {
                amount: 0.3,
              },
            }
          )
          .reverse();
      }
    }, root);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!navIsOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, navIsOpen]);

  return (
    <>
      <div className={styles['btn-cont']}>
        <div
          role='button'
          onClick={() => setNavIsOpen(!navIsOpen)}
          className={cn('title-sm btn-item', styles['btn'])}>
          Menu
        </div>
      </div>

      <div className={styles.menu} ref={root}>
        <div className='grid-inner'>
          <div className={styles['link-cont']}>
            <ul className='lg-py-12 sm-pt-12'>
              <li className='link-item'>
                <Link className={styles['link']} href='/about'>
                  About
                </Link>
              </li>

              <li className='link-item'>
                <Link className={styles['link']} href='/visit'>
                  Visit
                </Link>
              </li>
              <li className='link-item'>
                <Link className={styles['link']} href='/faqs'>
                  Faqs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
