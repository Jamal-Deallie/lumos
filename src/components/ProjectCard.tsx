import Image from 'next/image';
import { IProjectProps } from '@/types';
import styles from '@/styles/components/ProjectCard.module.scss';
import cn from 'classnames';

type CardProps = Pick<IProjectProps, 'client_name' | 'project_name' | 'img'>;

export default function ProjectCard({
  img,
  project_name,
  client_name,
}: CardProps) {
  return (
    <div className={styles['card']}>
      <div className={styles['image']}>
        <Image
          src={img}
          alt={project_name}
          fill
          sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
        />
      </div>
      <div className={cn(styles['desc'], 'px-lg-16 py-lg-24')}>
        <p className='txt-sm bold'>{client_name}</p>
        <p className='txt-md bold'>{project_name}</p>
      </div>
    </div>
  );
}
