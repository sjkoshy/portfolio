import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
