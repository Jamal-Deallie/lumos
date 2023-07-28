import { LinkButton } from '@/components/Button';
import Image from 'next/image';
import styles from '@/styles/containers/Intro.module.scss';
import cn from 'classnames';
type Props = {};

export default function Intro({}: Props) {
  return (
    <div className={cn(styles['intro'], 'my-lg-96 my-sm-64')}>
      <div className='grid-inner'>
        <div className={styles['title-cont']}>
          <h1 className='title-lg'>Lumos</h1>
          <LinkButton
            href='/studio'
            txtClr='#000'
            hoverTxt='#fffcf8'
            size='sm'
            variant='outline-secondary'>
            Learn More
          </LinkButton>
        </div>
        <div className={cn(styles['image'], 'mt-lg-96')}>
          <Image
            src='/images/simone-hutsch-l8fyK9RS-OU-unsplash.jpg'
            alt='building'
            fill
            quality={100}
            sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
            priority
          />
        </div>
        <div className={cn(styles['desc'], 'mt-lg-32')}>
          <div className={styles['summary']}>
            <p className='txt-lg'>
              <span>lumos,</span> elevating design boundaries. We envision,
              create, and transform spaces with an artistic touch and technical
              prowess. Our architectural expertise embraces sustainability and
              modern aesthetics, curating exceptional environments that leave a
              lasting impression.
            </p>
          </div>
          <div className={cn(styles['manifesto'], 'mt-lg-64 mt-sm-32')}>
            <p className='tertiary-clr txt-md'>STUDIO</p>
            <div className={cn(styles['line'], 'tertiary-bg')}></div>
            <div className={styles['caption']}>
              <p className='tertiary-clr txt-md'>
                Lighting the path to brilliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
