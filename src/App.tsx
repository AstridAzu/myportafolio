import styles from './App.module.css';
import {
  FloatingDots,
  Header,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer
} from './components';

const App = () => {
  return (
    <div className={styles.app}>
      <FloatingDots />
      {/* <GeometricCircles /> */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
