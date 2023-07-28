import { IProjectProps } from '@/types';
import clientPromise from '@/lib/mongodb';
import styles from '@/styles/containers/Projects.module.scss';
import Heading from '@/components/Heading';
import cn from 'classnames';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export const getServerSideProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('lumos-web');

    const res = await db.collection('projects').find({}).toArray();

    if (!res) {
      return { notFound: true };
    }
    return {
      props: {
        projects: JSON.parse(JSON.stringify(res)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      error: e,
    };
  }
};

export default function ProjectsPage({
  projects,
}: {
  projects: IProjectProps[];
}) {
  console.log(projects);
  return (
    <section className='primary-bg py-lg-120 py-sm-64'>
      <Heading
        title='Projects'
        desc='Explore our projects that breathe new life into urban landscapes,
            outdoor installations, and residential designs that harmonize with
            nature. Witness how our solutions enrich workspaces, fostering
            productivity and collaboration.'
      />

      <div className={cn(styles['projects'], 'grid-inner mt-lg-96 mt-sm-48')}>
        {projects.map(({ _id, client_name, project_name, img, slug }) => {
          return (
            <Link
              href={`projects/${slug}`}
              key={_id}
              className={styles['card-cont']}>
              <ProjectCard
                client_name={client_name}
                project_name={project_name}
                img={img}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
