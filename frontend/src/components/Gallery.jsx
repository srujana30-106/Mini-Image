import axios from "axios";

export default function Gallery({ images, onDelete }) {
  const deleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/images/${id}`);
      onDelete();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="grid">
      {images.map((img) => (
        <div className="card" key={img.id}>
          <img
            src={`data:${img.mimeType};base64,${img.data}`}
            alt={img.filename}
          />
          <button onClick={() => deleteImage(img.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
