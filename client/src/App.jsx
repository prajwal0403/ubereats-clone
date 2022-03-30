import { useEffect, useState } from 'react';
import './App.css';
// import { HomePage } from './homePage/HomePage';

function App() {
  const [data, setData]= useState(null);
  useEffect(()=>{
    fetch("/api").then((res)=>res.json())
    .then((data)=>setData(data.message));
  },[])
  return (
    <div className="App">
      {/* <HomePage /> */}
      <p>{!data?"loading...":data}</p>
    </div>
  );
}

export default App;
