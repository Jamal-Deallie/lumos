import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '@/styles/containers/Graph.module.scss';
import AfterGraph from '@/svgs/AfterGraph';
import BeforeGraph from '@/svgs/BeforeGraph';
import cn from 'classnames';
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default function Graph() {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      const pathLines = gsap.utils.toArray('.path-line');
      gsap.set(pathLines, { yPercent: 5, opacity: 0 });
      tl.current = gsap.timeline({
        scrollTrigger: {
          start: 'center center',
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      tl.current.to(pathLines, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: -0.3,
        ease: 'sine.in',
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} className={styles['graphs']}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1441.19 343.95'>
        <defs>
          <linearGradient id='gradient-horizontal'>
            <stop offset='0%' stopColor='#000' />
            <stop offset='50%' stopColor='#808080' />
            <stop offset='100%' stopColor='#8080808c' />
          </linearGradient>
          <linearGradient id='gradient-vertical' x2='0' y2='1'>
            <stop offset='0%' stopColor='#000' />
            <stop offset='50%' stopColor='#808080' />
            <stop offset='100%' stopColor='#8080808c' />
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient-horizontal)'
          d='M1.1 322.47c72-14.46 216-22.59 360-72.31s216-146.29 360-176.31 216 34.8 360 26.21c144-8.59 288-55.33 360-69.16v313.05H1.1v-21.48Z'
        />
        <path
          className='path-line'
          d='M1.1 309.06c72-14.46 216-22.59 360-72.31s216-146.29 360-176.31 216 34.8 360 26.21c144-8.59 288-55.33 360-69.16'
          style={{
            fill: 'none',
            stroke: '#808080',
          }}
        />
        <path
          className='path-line'
          d='M1.1 300.06c72-14.46 216-22.59 360-72.31s216-146.29 360-176.31 216 34.8 360 26.21c144-8.59 288-55.33 360-69.16'
          style={{
            fill: 'none',
            stroke: '#808080',
          }}
        />
        <path
          className='path-line'
          d='M.1 292.06c72-14.46 216-22.59 360-72.31s216-146.28 360-176.3 216 34.8 360 26.21c144-8.59 288-55.34 360-69.17'
          style={{
            fill: 'none',
            stroke: '#808080',
          }}
        />
      </svg>
    </div>
  );
}
