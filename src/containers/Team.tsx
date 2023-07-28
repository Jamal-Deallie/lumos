import React from 'react';
import TeamCard from '@/components/TeamCard';
import { employees } from '@/data';
import styles from '@/styles/containers/Team.module.scss';
type Props = {};

export default function Team({}: Props) {
  return (
    <div className='py-lg-120 py-sm-64'>
      <div className='grid-inner'>
        <div className={styles['title-cont']}>
          <h1 className='title-lg'>Our Leadership</h1>
        </div>

        <div className={styles['desc']}>
          <p className='txt-lg'>
            Lumos' leadership drives innovation, creativity, and sustainability
            in architectural lighting. With visionary guidance and a passion for
            excellence, they lead the industry, shaping transformative
            environments that inspire, elevate, and set new standards in
            lighting design. Their dedication to brilliance illuminates the path
            for a brighter future.
          </p>
        </div>
      </div>
      <div className='main-cont mt-lg-96 mt-sm-64'>
        <div className={styles['grid']}>
          {employees.map(({ id, ...props }) => {
            return <TeamCard {...props} />;
          })}
        </div>
      </div>
    </div>
  );
}
