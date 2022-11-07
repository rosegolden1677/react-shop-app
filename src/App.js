import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Balloons from './pages/Balloons';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/balloons" index element={<Balloons />} />
        <Route path="/cart" index element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
