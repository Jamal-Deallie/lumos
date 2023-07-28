import { LinkButton } from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/containers/Expertise.module.scss';
import cn from 'classnames';
import Arrow from '@/svgs/Arrow';
import { Heading } from '@/components/Heading';
export default function Expertise() {
  return (
    <div className={cn(styles['summary'], 'my-lg-96 my-sm-64')}>
      {/* <div className={styles['title-cont']}>
          <h1 className='title-lg'>Expertise</h1>
          <LinkButton href='/projects' size='sm' variant='outline-secondary'>
            More Info
          </LinkButton>
        </div>
        <div className={cn(styles['desc'], 'mt-lg-24 mt-sm-16')}>
          <p className='txt-lg'>
            At Lomos, we are masters of architectural innovation, blending
            creativity and technical prowess to craft transformative spaces.
          </p>
          <p className='mt-lg-16 mt-sm-8 txt-lg'>
            From contemporary urban oases to sustainable commercial complexes,
            our diverse portfolio showcases a keen eye for aesthetics,
            functionality, and sustainability.
          </p>
        </div> */}

      <Heading
        title='Expertise'
        button
        href='/studio'
        label='Learn More'
        desc={
          '<p>  At Lomos, we are masters of architectural innovation, blending creativity and technical prowess to craft transformative spaces. </p> <p>From contemporary urban oases to sustainable commercial complexes, our diverse portfolio showcases a keen eye for aesthetics, functionality, and sustainability. </p>'
        }
      />
      <div className='grid-inner'>
        <div className={styles['manifesto']}>
          <p className='tertiary-clr txt-md'>LEARN MORE</p>
          <div className={cn(styles['line'], 'tertiary-bg')}></div>
          <div className={styles['caption']}>
            <p className='tertiary-clr txt-md'>Contact Us Expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
}
