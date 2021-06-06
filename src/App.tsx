import React from 'react';
import './App.css';
import Header from '../src/header/Header';
import SearchEmoji from './emojis/SearchEmoji';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchEmoji/>
    </div>
  );
}

export default App;
