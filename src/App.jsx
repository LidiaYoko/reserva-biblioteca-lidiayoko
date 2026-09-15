import { useContext } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import { BooksContext } from "./context/BooksContext";

export default function App() {

  const { books, availableCount } = useContext(BooksContext);

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
        <BookForm/>
      </Panel>

      {/* Painel para listar o acervo */}
      <Panel title="Acervo">
        <BookList/>
      </Panel>
    </main>
  );
}
