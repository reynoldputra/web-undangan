import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/home'));
const Undangan = lazy(() => import('./pages/undangan'));


function App() {
  
  return (
    <div>
      

    <BrowserRouter>
      <Routes>
        <Route path="/" index element={
          <Suspense fallback={<>...</>}>
            <Home />
          </Suspense>
        } />
        <Route path="/undangan" index element={
          <Suspense fallback={<>...</>}>
            <Undangan />
          </Suspense> 
        } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
