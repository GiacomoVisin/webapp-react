import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'


export default function Home() {

    const [movies, setMovies] = useState([]);
    const api = "http://localhost:3000/index";
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(api)
            .then(response => {
                setMovies(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Errore durante il recupero dei film:", error);
            })

    }, []);

    return (
        <>
            <div className="container text-center" >
                {isLoading && <div className="container"><LineSpinner size="60" stroke="3" speed="1" color="black"/></div>}
                <h1> Benvenuto nella sezione Film </h1>
                <p>
                    scopri i nostri Film e le loro caratteristiche
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