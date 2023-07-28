import { GetServerSideProps } from 'next';
import styles from '@/styles/pages/SingleProject.module.scss';
import Image from 'next/image';
import { IProjectProps } from '@/types';
import cn from 'classnames';
import clientPromise from '@/lib/mongodb';

export default function SingleProject({ project }: { project: IProjectProps }) {
  return (
    <div className={'py-lg-128 py-sm-64 primary-bg'}>
      <div className='grid-inner'>
        <div className={cn(styles['title-cont'], 'mb-lg-64 mb-sm-32')}>
          <h1 className='title-lg'>{project.project_name}</h1>
        </div>

        <div className={cn(styles['img'])}>
          <Image
            src={project.img}
            alt={project.project_name}
            fill
            sizes='(max-width: 768px) 100vw)'
          />
        </div>

        <div className={cn(styles['details'], 'mt-lg-64 mt-sm-32')}>
          <ul>
            <li>
              <p className='txt-md bold'>
                Client: <span className='ml-lg-8'>{project.client_name}</span>
              </p>
            </li>
            <li className='mt-lg-8 mt-sm-8'>
              <p className='txt-md bold'>
                Services:{' '}
                <span className='ml-lg-8'>{project.services_received}</span>
              </p>
            </li>
            <li className='mt-lg-8 mt-sm-8'>
              <p className='txt-md bold'>
                Location: <span className='ml-lg-8'>{project.location}</span>
              </p>
            </li>
            <li className='mt-lg-8 mt-sm-8'>
              <p className='txt-md bold'>
                Date Completed:{' '}
                <span className='ml-lg-8'>{project.date_completed}</span>
              </p>
            </li>
          </ul>
        </div>

        <div className={cn(styles['summary'], 'mt-lg-64 mt-sm-32')}>
          <p className='txt-md'>{project.summary}</p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const slug = context.query.slug;
  const client = await clientPromise;
  const db = client.db('lumos-web');
  console.log(slug);
  const res = await db.collection('projects').findOne({ slug: slug });
  console.log(res);
  if (!res) {
    return { notFound: true };
  }

  return {
    props: {
      project: JSON.parse(JSON.stringify(res)),
    },
  };
};
