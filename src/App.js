import React from 'react';
import './App.css';
import { JevelinBody } from './components/JevelinBody/JevelinBody';
import { JevelinFooter } from './components/JevelinFooter/JevelinFooter';
import { JevelinHeader } from './components/JevelinHeader/JevelinHeader';

function App() {
  return (
    <div>
      <JevelinHeader/>
      <JevelinBody/>
      <JevelinFooter/>
    </div>
  );
}

export default App;
