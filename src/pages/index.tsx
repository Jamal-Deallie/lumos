import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/containers/Hero';
import Intro from '@/containers/Intro';
import ProjectSummary from '@/containers/ProjectSummary';
import Video from '@/containers/Video';
import Expertise from '@/containers/Expertise';
import Graph from '@/containers/Graph';
import Reviews from '@/containers/Reviews';
import styles from '@/styles/Home.module.scss';

export default function HomePage() {
  return (
    <section className='primary-bg'>
      <Hero />
      <Intro />
      <ProjectSummary />
      <Video />
      <Reviews />
      <Expertise />
      <Graph />
    </section>
  );
}
