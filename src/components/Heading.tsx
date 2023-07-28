import { IHeadingProps } from '@/types';
import { LinkButton } from '@/components/Button';
import styles from '@/styles/components/Heading.module.scss';
import { memo } from 'react';
import xss from 'xss';


function HeadingComponent({
  title,
  desc,
  button,
  href = '/',
  label,
}: IHeadingProps) {
  return (
    <div className='grid-inner'>
      <div className={styles['title-cont']}>
        <h1 className='title-lg'>{title}</h1>

        {button ? (
          <LinkButton
            href={href}
            size='sm'
            variant='outline-secondary'
            txtClr='#000'
            hoverTxt='#fffcf8'>
            {label}
          </LinkButton>
        ) : null}
      </div>
      {desc ? (
        <div
          className={styles['desc']}
          dangerouslySetInnerHTML={{
            __html: xss(desc),
          }}></div>
      ) : null}
    </div>
  );
}

export const Heading = memo(HeadingComponent);
