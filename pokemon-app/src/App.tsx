import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { getAllPokemon } from './utils/pokemon'

function App() {
  const initialURL: string = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    }
    fetchPokemonData()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          {loading ? (
            <h1>ロード中・・・</h1>
          ) : (
            <h1>ポケモンデータを取得しました。</h1>
          )}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
