
import './assets/globals.css';
import './assets/reset.css';
import './App.css';
import './assets/aos.css';

import Header from './components/header'
import Main from './components/main'
import About from './components/about'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Footer></Footer>
    </div >
  );
}

export default App;
