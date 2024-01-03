
import './assets/globals.css';
import './assets/reset.css';
import './App.css';
import './assets/aos.css';

import Home from './pages/home';
import Art from './pages/art';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/art" element={<Art />} />
                {/* <Route path="/contact" element={<ContactComponent />} /> */}
            </Routes>
        </Router>
    </div >
  );
}

export default App;
