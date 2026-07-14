import { useState, useEffect } from "react";


export default function AddMoviesForm({Loader}) {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [genre, setGenre] = useState("");
    const [abstract, setAbstract] = useState("");
    const [image, setImage] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Creazione dell'oggetto con i dati del film raccolti dal form
        const newMovie = { title, director, genre, abstract, image };
        console.log("Nuovo film aggiunto:", newMovie);

        // Reset dei campi del form dopo l'invio
        setTitle("");
        setDirector("");
        setGenre("");
        setAbstract("");
        setImage("");
        setSuccess(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 30);
    }, []);
    

    return (
        <>
            {isLoading && <div className="container text-center"><Loader/></div>}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label htmlFor="title">Titolo:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="director">Regista:</label>
                    <input
                        id="director"
                        type="text"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="genre">Genere:</label>
                    <input
                        id="genre"
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="image">Locandina (URL Immagine):</label>
                    <input
                        id="image"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="abstract">Trama / Abstract:</label>
                    <textarea
                        id="abstract"
                        value={abstract}
                        onChange={(e) => setAbstract(e.target.value)}
                        rows="4"
                        required
                    />
                </div>

                <button type="submit" style={styles.button}>Aggiungi Film</button>
            </form>

             <div className="container">   {success && <div className="alert alert-success p-2">Film inserito!</div>}  </div>
        </>
    );
}

// Semplici stili inline per strutturare il layout del form
const styles = {
    form: {
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        fontFamily: "sans-serif"
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    },
    button: {
        padding: "10px",
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold"
    }
};



<div className="container mt-5 text-center">

</div>