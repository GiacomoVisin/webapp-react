import { NavLink } from "react-router-dom"
import Loader from "./Loader.jsx"
import { useState } from "react"





export default function NavBar({ Loader }) {

    function switchLoader() {
        setShowLoader(prev => !prev)
    }


    const [showLoader, setShowLoader] = useState(true);

    return (

        <nav style={{ display: "flex", gap: "50px", padding: "10px", background: "#eee", textDecoration: "none" }}>
            <NavLink to="/" className="navlink" style={{ color: "black" }}> HOME </NavLink>
            <NavLink to="/AddMoviesForm" className="navlink" style={{ color: "black" }}> AGGIUNGI FILM</NavLink>
            <button className="btn" onClick={switchLoader}> {showLoader ? "Disable Loader" : "Enable Loader"} </button>
        </nav>
    );

}