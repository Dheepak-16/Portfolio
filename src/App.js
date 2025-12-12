import './App.css';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Particles from './components/Particles';
import Skills from './components/Skills';
import Button from './components/Button';
import Education from './components/Education';
import Experience from './components/Experience';
function App() {
  return (
    <div className="App">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={7}
        speed={0}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <Header />
      <Aboutme />
      <Skills />
      <Education />
      <Experience />
    </div>
    // <Button/>
  );
}

export default App;
