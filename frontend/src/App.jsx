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
