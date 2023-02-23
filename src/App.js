
import './App.css';


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <hr id='hr'></hr>
      <About/>
      <hr id='hr'></hr>
      <Projects/>
      <hr id='hr'></hr>
      <Contact/>
    </div>
  );
}

export default App;
