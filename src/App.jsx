import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import AcervoPage from "./pages/AcervoPage";
import NovoLivroPage from "./pages/NovoLivroPage";
import SobrePage from "./pages/SobrePage";
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {

  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros.</h1>

        <nav aria-label="Navegação principal">
          <NavLink to="/" end>
            Acervo
          </NavLink>

          <NavLink to="/novo">
            Novo livro
          </NavLink>

          <NavLink to="/sobre">
            Sobre
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<AcervoPage />} />
          <Route path="/novo" element={<NovoLivroPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
