import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="hero">
      <p className="eyebrow">ERRO 404</p>
      <h1>Página não encontrada.</h1>
      <p>A página que você tentou acessar não existe.</p>

      <Link to="/">Voltar ao início</Link>
    </section>
  );
}