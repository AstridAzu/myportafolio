import styles from './App.module.css';
import {
  FloatingDots,
  FollowCursor,
  Header,
  Hero,
  About,
  Education,
  Skills,
  Projects,
  Contact,
  Footer
} from './components';

const App = () => {
  return (
    <div className={styles.app}>
      <FloatingDots />
      <FollowCursor />
      {/* <GeometricCircles /> */}
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
