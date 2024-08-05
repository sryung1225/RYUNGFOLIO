import Intro from '@/components/intro/Intro';
import About from '@/components/about/About';
import Education from '@/components/education/Education';
import Work from '@/components/work/Work';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';

export default function HomePage() {
  return (
    <>
      <Intro />
      <About />
      <Education />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
