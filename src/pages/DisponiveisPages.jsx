import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCard from "../components/BookCard";
import Panel from "../components/Panel";

export default function DisponiveisPage() {
  const { books, toggleBook } = useContext(BooksContext);

  const availableBooks = books.filter((book) => book.available);

  return (
    <>
      <header className="hero">
        <p className="eyebrow">ACERVO</p>
        <h1>Livros disponíveis</h1>
      </header>

      <Panel title="Disponíveis">
        {availableBooks.length === 0 ? (
          <p>Nenhum livro disponível no momento.</p>
        ) : (
          <section className="book-list" aria-label="Livros disponíveis">
            {availableBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onReserve={toggleBook}
              />
            ))}
          </section>
        )}
      </Panel>
    </>
  );
}