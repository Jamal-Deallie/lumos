import Story from '@/containers/Story';
import Services from '@/containers/Services';
import Team from '@/containers/Team';

type Props = {};

export default function StudioPage({}: Props) {
  return (
    <section className="primary-bg">
      <Story />
      <Services />
      <Team />
    </section>
  );
}
