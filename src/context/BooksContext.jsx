import { createContext, useEffect, useState } from "react";
import { books as initialBooks } from "../data/books";

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
export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(loadBooks);

  useEffect(() => {
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

  const value = {
    books,
    availableCount,
    toggleBook: handleReserve,
    addBook: handleAddBook,
  };

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
}