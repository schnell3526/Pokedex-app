import React, { useEffect, useState } from 'react';
import './App.css';

import { getAllPokemon,getPokemon } from './utils/pokemon'
import Card from './compoments/Card/Card';

function App() {
  const initialURL: string = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([] as any[])


  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを表示
      loadPokemon(res.results);
      // console.log(res.results);
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

  console.log(pokemonData)

  return (
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
        </>
      )}
    </div>
  );
}

export default App;
