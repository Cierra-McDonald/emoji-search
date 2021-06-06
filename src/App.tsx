import React from 'react';
import './App.css';
import Header from '../src/header/Header';
import EmojiList from '../src/emojis/EmojiListPage'

function App() {
  return (
    <div className="App">
      <Header/>
      <EmojiList/>
    </div>
  );
}

export default App;
