import React from 'react';
import NavTop from "./Components/Nav/NavTop.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import MidMenu from "./Components/MidMenu/MidMenu.jsx"

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavTop/>
      <Hero/>
      <MidMenu/>
    </div>
  );
}

export default App;
