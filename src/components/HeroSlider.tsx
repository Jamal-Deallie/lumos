import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import MouseDown from '@/components/MouseDown';
import styles from '@/styles/containers/Hero.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Hero() {
  const matches = useMediaQuery('(min-width: 850px)');

  return (
    <div className={cn(styles['hero'], 'primary-bg pl-lg-40 pr-lg-40')}>
      <div className={styles['image']}>
        <Image
          className='hide-mobile'
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1690340650/lumos/project-1_n5wcvd.webp'
          alt='Hero'
          fill
          quality={100}
          sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
          priority
          loading='eager'
        />

        <Image
          className='hide-desk'
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1690509639/lumos/mobile-lumos-web_fmv83x.webp'
          alt='Hero'
          fill
          quality={100}
          sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
          priority
          loading='eager'
        />

        <div className={styles['copy']}>
          <div className='grid-inner'>
            <div className={cn(styles['left-title'], 'hide-mobile')}>
              <h1 className='title-lg primary-clr'>2023</h1>
              <p className='txt-md primary-clr mt-lg-16 mt-sm-8'>
                Dallas, Texas, USA
              </p>
            </div>
            <div className={styles['right-title']}>
              <h1 className='title-lg primary-clr mb-sm-24'>Skyline Heights</h1>

              <div className='mt-lg-16 mt-sm-8'>
                <p className='txt-md primary-clr'>Contemporary Urban Oasis</p>
                <div className={styles['line']}></div>
                <p className='txt-md primary-clr'>
                  A modern architectural marvel, soaring above the city with
                  breathtaking views, seamlessly blending luxury and
                  sustainability, creating an urban haven for those who seek the
                  epitome of refined living.
                </p>
              </div>
            </div>
          </div>
          <div className={cn(styles['mouse-down'], 'hide-mobile')}>
            <MouseDown />
          </div>
        </div>
      </div>

      <div className={styles['tabs']}>
        <div className={styles['tab']}></div>
        <div className={styles['tab']}></div>
      </div>
    </div>
  );
}
