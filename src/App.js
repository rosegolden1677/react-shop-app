import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
