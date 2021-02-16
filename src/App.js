import logo from './logo.svg';
import './App.css';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Congratulations you application is up and running!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
