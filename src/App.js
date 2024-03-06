// App.js
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Kuda from './Pages/Home/Kuda';

function App() {
  const targetRef = useRef(null);

  return (
    <>
      <Router>
        <Kuda/>
      <Routes>
  <Route path="/" element={<Home />} />
     </Routes>
      </Router>
      <div id="scroll-down-target" ref={targetRef}></div>
    </>
  );
}

export default App;


