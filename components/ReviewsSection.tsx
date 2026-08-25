import { REVIEWS } from "@/lib/reviews";
import { MAPS_URL } from "@/lib/schema";

export default function ReviewsSection() {
  return (
    <section className="sec-cream sec-blend-out-dark">
      <div className="container" style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: clampMargin(REVIEWS.length > 0),
          }}
        >
          <span className="eyebrow">Reviews</span>
        </div>

        {REVIEWS.length > 0 ? (
          <div
            className="reveal"
            style={{
              maxWidth: 720,
              marginInline: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 28,
              marginBottom: 36,
              textAlign: "center",
            }}
          >
            {REVIEWS.map((review) => (
              <p
                key={review.text.slice(0, 40)}
                className="lede"
                style={{ margin: 0, maxWidth: "100%", fontStyle: "italic" }}
              >
                “{review.text}”
              </p>
            ))}
          </div>
        ) : null}

        <a
          className="btn btn-outline-dark btn-sm"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bekijk reviews op Google
          <span className="arrow" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  );
}

function clampMargin(hasQuotes: boolean) {
  return hasQuotes ? 28 : 36;
}
