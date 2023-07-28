import React from 'react';
import Image from 'next/image';
import styles from '@/styles/containers/Story.module.scss';
import cn from 'classnames';


export default function Story() {
  return (
    <div className='pt-lg-120 pt-sm-64'>
      <div className='grid-inner'>
        <div className={styles['title-cont']}>
          <h1 className='title-lg'>Unveiling Innovation</h1>
        </div>
        <div className={styles['desc']}>
          <p className='txt-lg'>
            Lumos, born from the vision of talented lighting designers and
            engineers, illuminates the world with artistic brilliance. Their
            innovative solutions, blending artistry and technology, transform
            spaces into captivating environments. With a passion for
            sustainability, Lumos leads the way in redefining architectural
            experiences, one light at a time.
          </p>
        </div>
        <div className={cn(styles['image'], 'mt-lg-32')}>
          <Image
            src='/images/pexels-aleksandar-pasaric-1758672.jpg'
            alt='building'
            fill
            quality={100}
            sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
            priority
          />
        </div>
      </div>
    </div>
  );
}
