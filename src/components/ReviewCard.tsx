import ReviewLogo from '@/svgs/ReviewLogo';
import styles from '@/styles/components/ReviewCard.module.scss';
import cn from 'classnames';

export default function ReviewCard({
  corporation,
  position,
  reviewerFirstName,
  reviewerLastName,
  reviewContent,
}: {
  corporation: string;
  position: string;
  reviewerFirstName: string;
  reviewerLastName: string;
  reviewContent: string;
}) {
  return (
    <div className={cn(styles['card'], 'loop-target')}>
      <div className={cn(styles['outer'], 'secondary-bg primary-clr')}>
        <div className={styles['inner']}>
          <div className={styles['logo']}>
            <ReviewLogo />
          </div>

          <div className='mt-lg-16 mt-sm-16'>
            <p className={styles['content']}>{reviewContent}</p>

            <p className='mt-lg-32 mt-sm-24'>{`${reviewerFirstName} ${reviewerLastName}`}</p>
            <p className='mt-lg-8 mt-sm-8'>{position}</p>
            <p>{corporation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
