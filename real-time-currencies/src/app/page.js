"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [pokeData,setPokeData] = useState({})
  useEffect(()=>{
    async function getInfo() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const jsonData = await response.json();
        setPokeData(jsonData)
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
      {pokeData.sprites && (
        <Image
          src={pokeData.sprites.front_default}
          alt={pokeData.name}
          width={100}
          height={100}
        />
      )}
    </main>
  )
}
