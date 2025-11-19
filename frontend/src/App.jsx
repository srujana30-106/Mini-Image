import { useEffect, useState } from "react";
import axios from "axios";
import ImageUploader from "./components/ImageUploader";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/images");
      setImages(res.data);
    } catch (err) {
      console.error("Error fetching images", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container">
      <h1>Mini Image Gallery</h1>
      <ImageUploader onUpload={fetchImages} />
      <Gallery images={images} onDelete={fetchImages} />
    </div>
  );
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
