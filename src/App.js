import logo from './logo.svg';
import './App.css';
import Tombol from './components/Tombol';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TUGAS 4</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Tombol name="Imron"/>
        <Tombol name="Fuadi"/>
        <Tombol name="Gantenk"/>
      </header>
    </div>
  );
}

export default App;
