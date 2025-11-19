import { useState } from "react";
import axios from "axios";

export default function ImageUploader({ onUpload }) {
  const [progress, setProgress] = useState(0);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        onUploadProgress: (event) => {
          const percent = Math.round((event.loaded / event.total) * 100);
          setProgress(percent);
        },
      });

      setProgress(0);
      onUpload();
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div>
      {/* Custom Upload Button */}
      <label className="upload-btn">
        Choose Image
        <input type="file" accept="image/png, image/jpeg" onChange={handleUpload} />
      </label>

      {progress > 0 && <p>Uploading: {progress}%</p>}
    </div>
  );
}
