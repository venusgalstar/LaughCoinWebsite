import logo from './assets/link-babybonk-logo-512-png.png';
import './assets/globals.css';
import './assets/aos.css';
import './App.css';
import './assets/reset.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-img">
          <a href="https://babybonk.pro/#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <ul className="header-list">
            <li><a href="https://babybonk.pro/#">Home</a></li>
            <li><a href="https://babybonk.pro/#about">About</a></li>
            <li><a href="https://babybonk.pro/#tokenomics">Tokenomics</a></li>
          </ul>
        </div>
        <div className="header-buy">
          <a href="https://babybonk.pro/#">BUY $BBONK</a>
        </div>
      </header >
    </div >
  );
}

export default App;
