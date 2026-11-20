import MainLayout from './layouts/MainLayout';
import About from './sections/About';
import Hero from './sections/Hero';

function App() {

  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  );
}

export default App
