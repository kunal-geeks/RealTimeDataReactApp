"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import CandlestickChart from './CandlestickChart';

export default function Home() {

  const [polygonData, setPolygonData] = useState([]);

  useEffect(() => {
    async function getInfo() {
      try {
        const APIKEY = `TvOFx2ekQd_7oFrYAYpqNMlYu5NFOeQf`;
        const apiUrl = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/minute/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${APIKEY}`;
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setPolygonData(jsonData);
      } catch (error) {
        console.error(error);
      }
    }
    getInfo();
  }, []);

  useEffect(() => {
    console.log("Hey my value is ", polygonData);
  }, [polygonData]);

  return (
    <main className={styles.main}>
      <h1>Polygon Candlestick Chart Example</h1>
      <CandlestickChart />
    </main>
  );
  }
