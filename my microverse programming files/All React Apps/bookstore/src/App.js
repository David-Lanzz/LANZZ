import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Home from './routes/Home';
import Header from './routes/Header';
import Category from './routes/Category';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
