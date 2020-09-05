import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Greet';
import hello from './Component/hello';
function App() {
  return (
    <div className="App">
      <Greet/>
      <hello/>
    </div>
  );
}

export default App;
