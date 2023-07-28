import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import styles from '@/styles/containers/Services.module.scss';
import cn from 'classnames';
import { services } from '@/data';
type Props = {};

export default function Services({}: Props) {
  return (
    <div className='mt-lg-120 mt-sm-64'>
      <div className='main-cont'>
        <div className={styles['title-cont']}>
          <h1 className='title-lg'>Our Services</h1>
        </div>

        <div className={cn(styles['grid'], 'mt-lg-96 mt-sm-48')}>
          {services.map(({ id, ...props }) => {
            return <ServiceCard key={id} {...props} />;
          })}
        </div>
      </div>
    </div>
  );
}
