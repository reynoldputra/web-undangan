import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Undangan from './pages/undangan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/undangan" index element={<Undangan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
