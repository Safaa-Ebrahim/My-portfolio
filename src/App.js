import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portifolio from './components/Portifolio';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe />
      <Skills/>
      <Portifolio/>
      <Footer/>
    </div>
  );
}

export default App;
