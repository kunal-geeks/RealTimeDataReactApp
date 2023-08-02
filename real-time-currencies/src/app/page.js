"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [pokeData,setPokeData] = useState({})
  const [pokemonImage,setPokemonImage] = useState('')
  useEffect(()=>{
    async function getInfo() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const jsonData = await response.json();
        setPokeData(jsonData)
        setPokemonImage(jsonData.sprites.front_default)
      }catch(error) {
        console.error(error)
      }
    }
    getInfo()
  },[])

  useEffect(()=> {
    console.log("Hey my value is ",pokeData)
  },[pokeData])

  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      {pokemonImage && pokeData ?
        <>
          <img src={pokemonImage} alt={pokeData.name} width={200} height={200} />
          <h2>{pokeData.name}</h2>
        </>
        :
        <p></p>
      }
    </main>
  )
}
