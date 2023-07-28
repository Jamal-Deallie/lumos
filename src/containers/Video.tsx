import React from 'react';
import styles from '@/styles/containers/Video.module.scss';
import cn from 'classnames';

export default function Video() {
  return (
    <div className='grid-inner'>
      <div className={cn(styles['vid'], 'fade-vid')}>
        <video width='100%' muted={true} autoPlay loop>
          <source
            src={'video/pexels-tripaway-day-7031954.mp4'}
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
}
