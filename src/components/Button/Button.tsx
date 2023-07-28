import { memo, useRef } from 'react';
import cn from 'classnames';
import styles from '@/styles/components/Button.module.scss';
import { IButtonProps } from '@/types';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';

function ButtonComponent({
  variant,
  classes,
  size,
  children,
  type,
  disabled,
  txtClr,
  hoverTxt,
  ...props
}: IButtonProps) {
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
      <button type={type} {...props}>
        <span className={styles['label']}>{children}</span>
      </button>
      <div ref={overlay} className={styles['overlay']}></div>
    </div>
  );
}

export const Button = memo(ButtonComponent);
