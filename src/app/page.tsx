import Header from '@/components/common/Header';
import Intro from '@/components/intro/Intro';
import About from '@/components/about/About';
import Education from '@/components/education/Education';
import Work from '@/components/work/Work';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Education />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
