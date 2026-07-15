import { useState } from "react";
import axios from "axios";

export default function FormReview({ movieId, onReviewSuccess }) {
    
    // Stati per i campi del form
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [vote, setVote] = useState(5);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);



        if (name === "") {
            setError("Tutti i campi sono obbligatori!");
            return;
        }

        const reviewData = {
            name: name,
            text: text,
            vote: parseInt(vote)
        };


        axios.post(`http://localhost:3000/addReview/${movieId}`, reviewData)
            .then(response => {
                setSuccess(true);

                setName("");
                setText("");
                setVote(5);
             


                if (onReviewSuccess) {
                    onReviewSuccess();
                }
            })
            .catch(err => {
                console.error("Errore durante l'invio della recensione:", err);
            });
    };

    return (
        <>
           
            <div className="card mt-4 p-4 text-white" style={{ backgroundColor: "#3b134b", border: "1px solid #450a68" }}>
                <h4 className="mb-3">Lascia una recensione</h4>

                {success && <div className="alert alert-success p-2">Recensione inserita!</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Nome *</label>
                        <input
                            type="text"
                            className="form-control "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Inserisci il tuo nome"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Voto *</label>
                        <select className="form-select" value={vote} onChange={(e) => setVote(e.target.value)}>
                            <option value="1">1 ⭐</option>
                            <option value="2">2 ⭐</option>
                            <option value="3">3 ⭐</option>
                            <option value="4">4 ⭐</option>
                            <option value="5">5 ⭐</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">La tua Recensione</label>
                        <textarea className="form-control" rows="3" value={text} onChange={(e) => setText(e.target.value)} placeholder="Cosa ne pensi di questo film?"></textarea>
                    </div>

                    <button type="submit" className="btn btn-success w-100 mt-2">Invia Recensione</button>
                </form>
            </div>
        </>

    );
}