import React from 'react';
import styles from '@/styles/components/ServiceCard.module.scss';
import ServiceIcon from '@/svgs/ServiceIcon';
import cn from 'classnames';

export default function ServiceCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className={cn(styles['service-card'], 'p-lg-32')}>
      <div className={styles['inner']}>
        <div className={styles['icon']}>
          <ServiceIcon />
        </div>
        <div>
          <p className='mt-lg-16 mt-sm-8 txt-md'>{name}</p>
          <p className='mt-lg-16 mt-sm-8 txt-md'>{description}</p>
        </div>
      </div>
    </div>
  );
}
