import Link from 'next/link';
import { memo, useRef } from 'react';
import cn from 'classnames';
import styles from '@/styles/components/Button.module.scss';
import { ILinkButtonProps } from '@/types';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';

function LinkComponent({
  variant,
  size,

  block,
  children,
  href,
  classes,

  txtClr,
  hoverTxt,
  ...props
}: ILinkButtonProps) {
  const styleClasses = cn(
    classes,
    styles['base'],
    styles[`${size}`],
    styles[`${variant}-variant`]
  );
  const overlay = useRef(null!);
  const root = useRef(null!);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(overlay.current, { xPercent: -100 });
    });

    return () => ctx.revert();
  }, []);

  const onEnter = () => {
    gsap.to(root.current, { color: hoverTxt });
    gsap.to(overlay.current, { xPercent: 0 });
  };

  const onLeave = () => {
    gsap.to(root.current, { color: txtClr });
    gsap.to(overlay.current, { xPercent: -100 });
  };
  return (
    <div
      className={cn(styles['btn-cont'], styleClasses)}
      ref={root}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}>
      <Link href={href} passHref {...props} className={styles['link']}>
        <span className={styles['label']}>{children}</span>
      </Link>
      <div ref={overlay} className={styles['overlay']}></div>
    </div>
  );
}

export const LinkButton = memo(LinkComponent);
