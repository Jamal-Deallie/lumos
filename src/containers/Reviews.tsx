import React from 'react';
import Image from 'next/image';
import MarqueeLoop from '@/components/MarqueeLoop';
import { reviews } from '@/data';
import ReviewCard from '@/components/ReviewCard';
import styles from '@/styles/containers/Reviews.module.scss';
import cn from 'classnames';
import { Heading } from '@/components/Heading';

export default function Reviews() {
  return (
    <div className='pt-lg-120 pt-sm-64'>
      <Heading
        title='Clients'
        desc={
          '<p>Our goal is to deliver transformative designs and innovative services, highlighting sustainability focus and captivating environments. </p>'
        }
      />

      <div className='mt-lg-32 mt-sm-32'>
        <div className='hide-mobile'>
          <MarqueeLoop>
            <div className={styles['marquee']}>
              <div className={cn(styles['loop-cont'], 'loop-item')}>
                {reviews.map(({ id, ...props }) => {
                  return <ReviewCard key={id} {...props} />;
                })}
              </div>
            </div>
          </MarqueeLoop>
        </div>

        <div className='hide-desk'>
          <div className={cn(styles['loop-cont'], 'loop-item')}>
            {reviews.slice(0, 3).map(({ id, ...props }) => {
              return <ReviewCard key={id} {...props} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
