import logo from './logo.svg';
import './App.css';
import Compteur from './compteur/compteur';

function App() {
  return (
    <div className="App">
      <h1>Exo 03 - Le compteur</h1>
      <Compteur />
      <hr />  
      <Compteur incr={5} />
      <hr />  
      <Compteur incr={10} />

    </div>
  );
}

export default App;
