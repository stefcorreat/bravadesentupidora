import { customerReviews } from "@/data/customer-reviews";
import { site, whatsappUrl } from "@/lib/site";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeZone: "UTC" });

function ReviewDate({ date }: { date: string }) {
  return <time dateTime={date}>{dateFormatter.format(new Date(date))}</time>;
}

export function CustomerReviews() {
  const reviews = customerReviews.slice(0, 6);

  return (
    <section className="section pale" aria-labelledby="customer-reviews-title">
      <div className="container">
        <div className="section-head">
          <h2 id="customer-reviews-title">Avaliações de clientes da Brava</h2>
        </div>
        {reviews.length > 0 ? <ul className="customer-review-grid">
          {reviews.map(({ id, name, rating, text, location, date, reply }) => (
            <li className="customer-review" key={id}>
              <div className="customer-review-byline">
                <span className="customer-review-avatar" aria-hidden="true">
                  {name.trim().split(/\s+/).slice(0, 2).map(part => part.charAt(0)).join("").toLocaleUpperCase("pt-BR")}
                </span>
                <div>
                  <strong>{name}</strong>
                  {location && <small>{location}</small>}
                </div>
              </div>
              <div className="customer-review-meta">
                <span className="customer-review-rating" role="img" aria-label={`${rating} de 5 estrelas`}>
                  <span aria-hidden="true">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</span>
                </span>
                {date && <ReviewDate date={date}/>}
              </div>
              <blockquote>{text}</blockquote>
              {reply && <div className="customer-review-reply">
                <strong>Resposta da {site.shortName}</strong>
                {reply.date && <ReviewDate date={reply.date}/>}
                <p>{reply.text}</p>
              </div>}
            </li>
          ))}
        </ul> : (
          <div className="customer-review-invite">
            <p>Já foi atendido pela Brava? Conte como foi a sua experiência.</p>
            <a className="button" href={whatsappUrl("Olá, Brava! Já fui atendido e gostaria de compartilhar minha experiência.")} target="_blank" rel="noopener noreferrer">Enviar depoimento pelo WhatsApp</a>
          </div>
        )}
      </div>
    </section>
  );
}
