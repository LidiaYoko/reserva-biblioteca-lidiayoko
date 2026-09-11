export default function BookCard({ book, onReserve }) {
  return (
    <article className="book-card">
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <span className={`badge ${book.available ? "badge-ok" : "badge-off"}`}>
        {book.available ? "Disponível" : "Reservado"}
      </span>
      <button type="button" onClick={() => onReserve(book.id)}>
        {book.available ? "Reservar" : "Devolver"}
      </button>
    </article>
  );
}