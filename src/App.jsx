import MainLayout from './layouts/MainLayout';
import About from './sections/About';
import Design from './sections/Design';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {

  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Design />
    </MainLayout>
  );
}

export default App
