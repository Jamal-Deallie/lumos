import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { FieldError } from 'react-hook-form';
import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';
import { Radio } from '@/components/Radio';
import styles from '@/styles/components/ContactForm.module.scss';
import cn from 'classnames';

const cats = [
  { id: 1, value: 'Architecture', label: 'Architecture' },
  { id: 2, value: 'Design', label: 'Design' },
  { id: 3, value: 'Planning', label: 'Planning' },
  { id: 4, value: 'Renovation', label: 'Renovation' },
  { id: 5, value: 'Landscaping', label: 'Landscaping' },
  { id: 6, value: 'Other', label: 'Other' },
] as const;

const formatErrors = (errors: Record<string, FieldError>) =>
  Object.keys(errors).map(key => ({
    key,
    message: errors[key].message,
  }));

/* ---------- Some UI components ----------*/

type AlertType = 'error' | 'warning' | 'success';

// Global Alert div.
const Alert = ({ children, type }: { children: string; type: AlertType }) => {
  const backgroundColor =
    type === 'error' ? 'tomato' : type === 'warning' ? 'orange' : 'powderBlue';

  return <div className={styles['error']}>{children}</div>;
};

// Use role="alert" to announce the error message.
const AlertInput = ({ children }: { children: React.ReactNode }) =>
  Boolean(children) ? (
    <span role='alert' style={{ color: 'tomato' }}>
      {children}
    </span>
  ) : null;

/* ---------- Zod schema et TS type ----------*/

// Describe the correctness of data's form.
const formSchema = z.object({
  name: z.string().min(1, { message: 'The lastName is required.' }).max(36),
  email: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),
  message: z.string().min(1, { message: 'Your message is required.' }).max(300),
  category: z.string().min(1, { message: 'A category is required.' }).max(36),
});

// Infer the TS type according to the zod schema.
type FormType = z.infer<typeof formSchema>;

/* ---------- React component ----------*/

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormType) => {
    console.log('onSubmit', values);
  };

  return (
    <div className='grid-inner py-lg-120 py-sm-64'>
      <div className={cn(styles['form-cont'], 'secondary-bg p-lg-64 p-sm-32')}>
        <div className={styles['title-cont']}>
          <h1 className='title-lg primary-clr tac'>
            Share Your Potential Project
          </h1>
        </div>

        <div className={cn(styles['error-cont'], 'mt-lg-16 mt-sm-8')}>
          {Boolean(Object.keys(errors)?.length) && (
            <Alert type='error'>There are errors in the form.</Alert>
          )}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className='py-lg-96 py-sm-32'>
          <div className={styles['flex-cont']}>
            <div className='mt-sm-8 mt-lg-16'>
              <Input
                placeholder='Your Name'
                classes='mt-lg-8 mt-sm-4'
                autoComplete='one-time-code'
                id='firstName_field'
                type='text'
                {...register('name')}
                aria-invalid={Boolean(errors.name)}
              />
              <AlertInput>{errors?.name?.message}</AlertInput>
            </div>
          </div>
          <div className={styles['flex-cont']}>
            <div className='mt-sm-16 mt-lg-24'>
              <Input
                placeholder='Company Email'
                autoComplete='one-time-code'
                id='email_field'
                type='email'
                {...register('email')}
                aria-invalid={Boolean(errors.email)}
              />
              <AlertInput>{errors?.email?.message}</AlertInput>
            </div>
          </div>
          <div className='mt-sm-16 mt-lg-24'>
            <TextArea
              placeholder='Tell us about your project'
              autoComplete='one-time-code'
              id='message_field'
              {...register('message')}
              aria-invalid={Boolean(errors.message)}
            />
            <AlertInput>{errors?.message?.message}</AlertInput>
          </div>

          <div className='mt-sm-16 mt-lg-24'>
            <span className={cn(styles['radio-title'], 'primary-clr')}>
              How can we help?
            </span>

            <div className={cn('mt-lg-16', styles['radio-cont'])}>
              {cats.map(({ value, id, label }) => {
                return (
                  <Radio
                    key={id}
                    type='radio'
                    value={value}
                    id={value}
                    label={label}
                    {...register('category', { required: true })}
                  />
                );
              })}
            </div>
          </div>

          <Button
            type='submit'
            disabled={isSubmitting || !isValid}
            variant='outline-primary'
            size='lg'
            hoverTxt='#000'
            txtClr='#fffcf8'
            classes='mt-lg-32 mt-sm-16 full-w'>
            Submit
          </Button>
          {/* <pre>{JSON.stringify(formatErrors, null, 2)}</pre>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
        <pre>
          formState ={' '}
          {JSON.stringify(
            { isSubmitting, isSubmitted, isDirty, isValid },
            null,
            2
          )}
        </pre> */}
        </form>
      </div>
    </div>
  );
}
