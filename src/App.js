import './assets/styles/App.scss';
import Header from './components/Header';
import Characters from './components/Characters';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      <Footer />
      {/* <h1>Hola Mundo</h1> */}
    </div>
  );
}

export default App;
