import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  memo,
} from 'react';
import cn from 'classnames';
import styles from '@/styles/components/Radio.module.scss';

export interface RadioProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  classes?: string;
  autoComplete?: string;
  name?: string;
  type?: string;
  error?: string;
  label: string;
  value?: string;
}

const RadioComponent = forwardRef(
  (
    { classes, autoComplete, name, error, label, ...rest }: RadioProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={styles['radio-cont']}>
        <input
          type='radio'
          className={cn(styles['input'], classes)}
          autoComplete={autoComplete}
          name={name}
          ref={ref}
          {...rest}
        />
        {label}
      </label>
    );
  }
);

export const Radio = memo(RadioComponent);
