import React, { useEffect, useState } from 'react';
import './App.css';

import { getAllPokemon,getPokemon } from './utils/pokemon'
import Card from './compoments/Card/Card';
import Navbar from './compoments/Navbar/Navbar';

function App() {
  const initialURL: string = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([] as any[])
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");


  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを表示
      loadPokemon(res.results);
      setNextURL(res.next)
      setPrevURL(res.previous)
      setLoading(false);

    }
    fetchPokemonData()
  }, [])

  const loadPokemon = async (data: any) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon: any) => {
        // console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord
      })
    )
    setPokemonData(_pokemonData)
  };

  // 次ページへの遷移処理
  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results)
    setNextURL(data.next)
    setPrevURL(data.previous)
    setLoading(false)
  };

  // 前のページへの遷移処理
  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next)
    setPrevURL(data.previous)
    setLoading(false)
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h2>ロード中・・・</h2>
        ) : (
          <>
            <div className='pokemonCardContainer'>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon}/>;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
