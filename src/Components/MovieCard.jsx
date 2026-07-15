import { Link } from "react-router-dom";


export default function MovieCard({ movie, isDetail = false }) {

    return (
        <div className="card" style={{ width: "300px", margin: "10px", padding: "10px" }}>
            <h1>{movie.title}</h1>
            <img src={`http://localhost:3000/${movie.image}`} style={{ height: "350px" }} alt={movie.title} />
            <p> <strong>Director:</strong> {movie.director}</p>
            <p> <strong>Genere:</strong> {movie.genre}</p>
            {!isDetail && (
                <Link to={`/MovieDetails/${movie.id}`} className="btn card-btn">PIU' DETTAGLI</Link>
            )}
            {isDetail && (

                <div className="reviews-section mt-4 text-start">
                    <h3 className="border-bottom pb-2 text-white">Recensioni degli utenti</h3>
                    {!movie.reviews || movie.reviews?.length === 0 ? (
                        <p className="text-muted">Nessuna recensione ancora presente per questo film.</p>
                    ) : (
                        <div className="d-flex flex-column gap-3 mt-3">
                            {movie.reviews.map((review, index) => (
                                <div key={index} className="card" style={{ padding: "15px", backgroundColor: "#370842" }}>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="m-0 text-white"><strong>{review.name}</strong></h5>
                                        <span className="badge bg-warning text-dark">
                                            Voto: {review.vote} / 5 ⭐
                                        </span>
                                    </div>
                                    <p className="mb-0" style={{ fontStyle: "italic", color: "#c9c1bfd7" }}>
                                        "{review.text}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )
            }

        </div>
    )
}