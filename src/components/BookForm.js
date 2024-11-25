import React, { useState } from "react";

function BookForm({ addBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) {
      alert("Titlul și autorul sunt obligatorii!");
      return;
    }
    addBook(formData);
    setFormData({ title: "", author: "", genre: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Titlu"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Gen literar"
        value={formData.genre}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Descriere"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Adaugă carte</button>
    </form>
  );
}

export default BookForm;
