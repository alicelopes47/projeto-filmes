import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const [search, setSearch] = useState(false);

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Main search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
