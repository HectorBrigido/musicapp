import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/song/:id" element={<SearchPage />} />
    </Routes>
    </div>
  );
}

export default App;