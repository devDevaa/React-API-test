import { useState } from 'react';
import './App.css';
import TripList from './components/TripList/index.js';

function App() {

  let [show, setShow] = useState(true);

  return (
    <>
      <button onClick={()=>{setShow(false)}}>hide trips</button>
      <button onClick={()=>{setShow(true)}}>show trips</button>
      {show && <TripList/>}
    </>
  );
}

export default App;
