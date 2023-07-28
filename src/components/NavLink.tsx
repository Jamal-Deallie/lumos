import { useState, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from '@/styles/components/NavLinks.module.scss';

type NavLinkProps = LinkProps & {
  children: ReactNode;
  href: string;
  key?: string | number;
};

export default function NavLink({ children, ...props }: NavLinkProps) {
  const { asPath, isReady } = useRouter();
  const [active, setActive] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    if (isReady) {
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname;
      const activePathname = new URL(asPath, location.href).pathname;
      linkPathname === activePathname ? setActive(true) : setActive(false);
    }
  }, [asPath, isReady, props.as, props.href]);

  return (
    <Link
      passHref
      {...props}
      className={cn([styles.link], active ? [styles.active] : null)}>
      {children}
    </Link>
  );
}
