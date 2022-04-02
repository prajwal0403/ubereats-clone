import { useEffect, useState } from 'react';
import './App.css';
import { HomePage } from './homePage/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <p>{!data?"loading...":data}</p> */}
    </div>
  );
}

export default App;
