import Header from '@/components/common/Header';
import Intro from '@/components/intro/Intro';
import About from '@/components/about/About';
import Work from '@/components/work/Work';

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Work />
    </main>
  );
}
