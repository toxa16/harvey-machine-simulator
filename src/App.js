import React from 'react';

import './App.css';
import Navbar from './Navbar/Navbar';
import ConnectedMain from './main/ui/ConnectedMain';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ConnectedMain />
    </div>
  );
}

export default App;
