import { LinkButton } from '@/components/Button';
import { Heading } from '@/components/Heading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/containers/ProjectSummary.module.scss';
import cn from 'classnames';
import Arrow from '@/svgs/Arrow';

export default function ProjectSummary() {
  return (
    <div className={cn(styles['summary'], 'my-lg-96 my-sm-64')}>
      <Heading title='Projects' button href='/projects' label='Projects' />
      <div className='grid-inner'>
        <Link href='/' className={styles['image-wrap']}>
          <div className={styles['image']}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1690340652/lumos/project-8_szqdju.webp'
              alt='building'
              fill
              sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
              quality={100}
            />

            <div className={styles['arrow']}>
              <span className={styles['svg-cont']}>
                <Arrow />
              </span>
            </div>
          </div>
        </Link>

        <Link href='/' className={styles['image-wrap']}>
          <div className={styles['image']}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1690340651/lumos/project-3_gnpt8c.webp'
              alt='building'
              fill
              sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
              quality={100}
            />

            <div className={styles['arrow']}>
              <span className={styles['svg-cont']}>
                <Arrow />
              </span>
            </div>
          </div>
        </Link>

        <Link href='/' className={styles['image-wrap']}>
          <div className={styles['image']}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1690340651/lumos/project-2_wesitk.webp'
              alt='building'
              fill
              sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
              quality={100}
            />
            <div className={styles['arrow']}>
              <span className={styles['svg-cont']}>
                <Arrow />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
