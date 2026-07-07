export default function MovieCard({movie}) {

    return (
        <div className="card" style={{ width: "300px", margin: "10px", padding: "10px" }}>
            <h1>{movie.title}</h1>
            <img src={`http://localhost:3000/${movie.image}`} style={{height: "350px" }} alt={movie.title} />
            <p> <strong>Director:</strong> {movie.director}</p>
            <p> <strong>Genere:</strong> {movie.genre}</p>
        </div>
    )
}