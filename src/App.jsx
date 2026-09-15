import { useEffect, useState } from "react";
import "./App.css";
import { books as initialBooks } from "./data/books";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Panel from "./components/Panel";

const STORAGE_KEY = "reserva-biblioteca:books";
  function loadBooks() {
    try {
      const storedBooks = localStorage.localStorage.getItem(STORAGE_KEY);

      if (!storedBooks) {
        return initialBooks;
      }

      const parsedBooks = JSON.parse(storeBooks);
      return Array.isArray(parsedBooks) ? parsedBooks : initialBooks;
    } catch {
      return initialBooks;
    }

  }

export default function App() {
  const [books, setBooks] = useState(loadBooks);

  useEffect (() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  function handleReserve(bookId) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book
      )
    );
  }
  
  function handleAddBook(newBook) {
  setBooks((prevBooks) => [...prevBooks, newBook]);
  }
 
  const availableCount = books.filter((book) => book.available).length;

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p className="counter">
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>

      {/* Painel para cadastrar novo livro */}
      <Panel title="Novo livro">
        <BookForm onAddBook={handleAddBook} />
      </Panel>
      
      {/* Painel para listar o acervo */}
      <Panel title="Acervo">
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}
