import { Link } from "react-router-dom";


export default function MovieCard({movie, isDetail=false}) {

    return (
        <div className="card" style={{ width: "300px", margin: "10px", padding: "10px" }}>
            <h1>{movie.title}</h1>
            <img src={`http://localhost:3000/${movie.image}`} style={{height: "350px" }} alt={movie.title} />
            <p> <strong>Director:</strong> {movie.director}</p>
            <p> <strong>Genere:</strong> {movie.genre}</p>
            {!isDetail && (
                <Link to={`/MovieDetails/${movie.id}`} className="btn btn-primary">PIU' DETTAGLI</Link>
            )}
             {!isDetail && (
                 <p>{movie.text}</p>
            )}
           
        </div>
    )
}