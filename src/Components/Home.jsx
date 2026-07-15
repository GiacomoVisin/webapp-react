import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'
import Jumbotron from "../image/jumbotron.png"

export default function Home({ Loader,showLoader }) {

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
                {showLoader ? isLoading && <Loader /> : null}
                <img src={Jumbotron} alt="Jumbotron" className="img-fluid jumbotron" />
                <h1 className ="text-white" > Benvenuto nella sezione Film </h1>
                <p className ="text-white">
                    scopri i nostri Film e le loro caratteristiche
                </p>
            </div>

            <div className="container d-flex flex-wrap justify-content-center">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
}