import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web de Jordi Gomis Colomina
        </p>
        <p>
          Actualmente trabajo de Software Engineer y tengo experiencias profesionales diversas.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/jordi-gomis-colomina-0677838b"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mas infromacion sobre mi en Linkedin.
        </a>
      </header>
    </div>
  );
}

export default App;
