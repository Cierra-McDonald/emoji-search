import React from 'react';
import './App.css';
import Header from '../src/header/Header';
import EmojiList from '../src/emojis/EmojiListPage'
import SearchEmoji from './emojis/SearchEmoji';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchEmoji/>
      <EmojiList/>
    </div>
  );
}

export default App;
