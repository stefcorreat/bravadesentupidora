import { customerReviews } from "@/data/customer-reviews";

export function CustomerReviews() {
  const reviews = customerReviews.slice(0, 6);

  if (!reviews.length) return null;

  return (
    <section className="section pale" aria-labelledby="customer-reviews-title">
      <div className="container">
        <div className="section-head">
          <h2 id="customer-reviews-title">Avaliações de clientes da Brava</h2>
        </div>
        <ul className="customer-review-grid">
          {reviews.map(({ id, name, rating, text, location }) => (
            <li className="customer-review" key={id}>
              <div className="customer-review-byline">
                <span className="customer-review-avatar" aria-hidden="true">
                  {name.trim().charAt(0).toLocaleUpperCase("pt-BR")}
                </span>
                <div>
                  <strong>{name}</strong>
                  {location && <small>{location}</small>}
                </div>
              </div>
              <div className="customer-review-rating" role="img" aria-label={`${rating} de 5 estrelas`}>
                <span aria-hidden="true">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</span>
              </div>
              <blockquote>{text}</blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
