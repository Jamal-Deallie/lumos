import styles from '@/styles/containers/Contact.module.scss';
import ContactCard from '@/components/ContactCard';
import cn from 'classnames';
import { contact } from '@/data';


export default function ContactUs() {
  return (
    <div className={cn('mt-lg-120 mt-sm-64', styles['contact'])}>
      <div className='grid-cont'>
        <div className={styles['title-cont']}>
          <h1 className='title-lg'>Contact Us</h1>
        </div>
        <div className={styles['desc']}>
          <p className='txt-lg'>
            Reach out to discuss potential projects and experience personalized
            service from our expert team. Let us illuminate your spaces with
            captivating lighting solutions
          </p>
        </div>
      </div>
      <div className='mt-lg-32 mt-sm-24 grid-cont'>
        {contact.map(({ id, ...props }) => {
          return (
            <div key={id} className={styles['card-wrap']}>
              <ContactCard {...props} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
