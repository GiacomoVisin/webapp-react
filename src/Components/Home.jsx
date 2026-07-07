import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


export default function Home() {

    const [movies, setMovies] = useState([]);
    const api = "http://localhost:3000/index";
    useEffect(() => {
        axios.get(api)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error("Errore durante il recupero dei film:", error);
            })

    }, []);

    return (
        <>
            <div>
                <h1> Benvenuto nella sezione Film </h1>
                <p>
                    scopri i nostri Film e le loro caratteristiche, cliccando sul pulsante "PIU' DETTAGLI" potrai accedere ad una pagina dedicata al film selezionato.
                </p>
            </div>

            <div className="container d-flex flex-wrap justify-content-center">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
}