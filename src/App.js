import React, {
  useEffect,
  useState
} from 'react';
import './App.scss';

import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
