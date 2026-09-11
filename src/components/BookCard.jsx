export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <span className={`badge ${book.available ? "badge-ok" : "badge-off"}`}>
        {book.available ? "Disponível" : "Reservado"}
      </span>
    </article>
  );
}