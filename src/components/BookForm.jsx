import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { BooksContext } from "../context/BooksContext";

export default function BookForm() {
  const { addBook } = useContext(BooksContext);
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ title: "", author: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim() || !formData.author.trim()) {
      setError("Preencha o título e o autor.");
      return;
    }

    const newBook = {
      id: crypto.randomUUID(),
      title: formData.title,
      author: formData.author,
      available: true,
    };

    addBook(newBook);
    navigate("/");
    setFormData({ title: "", author: "" });
    setError("");
  }

  return (
  <form onSubmit={handleSubmit}>
    <div>
      <label>
        Título:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
    </div>
    <div>
      <label>
        Autor:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </label>
    </div>
    {error && <p style={{ color: "red" }}>{error}</p>}
    <button type="submit">Cadastrar</button>
  </form>
);
}