import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Random from './components/random';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='main-div'>
        <Random/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
