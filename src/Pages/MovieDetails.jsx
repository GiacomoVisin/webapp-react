import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {

const { id } = useParams();
const [movie, setMovie] = useState(null);

useEffect(() => {
    const api = `http://localhost:3000/index/${id}`;
    axios.get(api)
    .then(response=>{
        setMovie(response.data);
    })
    .catch(error=>{
        console.error("Errore durante il recupero dei dettagli del film:", error);
    })
}, [id]);

if (!movie) {
        return <div className="container mt-5 text-center"><h3>Caricamento dettagli in corso...</h3></div>;
    }

    return (

        <div className="container text-center">
            <MovieCard movie={movie} key={movie.id} isDetail={true}/>
        </div>
    );
}