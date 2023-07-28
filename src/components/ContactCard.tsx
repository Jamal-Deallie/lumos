import React from 'react';
import Chat from '@/svgs/Chat';
import Call from '@/svgs/Call';
import Email from '@/svgs/Email';
import Location from '@/svgs/Location';
import styles from '@/styles/components/ContactCard.module.scss';
import cn from 'classnames';
export default function ContactCard({
  icon,
  title,
  subtitle,
  contact,
}: {
  title: string;
  icon: string;
  subtitle: string;
  contact: string;
}) {
  function renderedIcon(icon: string) {
    switch (icon) {
      case 'location':
        return <Location />;
      case 'call':
        return <Call />;
      case 'chat':
        return <Chat />;
      case 'email':
        return <Email />;
    }
  }

  return (
    <div className={cn(styles['card'], 'px-lg-16 py-lg-24 p-sm-16')}>
      <div className={cn(styles['icon'], styles[icon], 'p-lg-8 p-sm-8')}>
        {renderedIcon(icon)}
      </div>
      <div className='clr-secondary pt-lg-24 pt-sm-16'>
        <span className='mb-lg-8'>{title}</span>
        <p className={styles['subtitle']}>{subtitle}</p>
        <p className={cn('mt-lg-48 mt-sm-24', styles['contact'])}>{contact}</p>
      </div>
    </div>
  );
}
