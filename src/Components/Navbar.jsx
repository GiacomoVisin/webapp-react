import { NavLink } from "react-router-dom"
import Loader from "./Loader.jsx"
import { useState } from "react"





export default function NavBar({ Loader }) {

    function switchLoader() {
        setShowLoader(prev => !prev)
    }


    const [showLoader, setShowLoader] = useState(true);

    return (

        <nav style={{ display: "flex", gap: "50px", padding: "10px",  background: "linear-gradient(to right, #371b4c, #1d2e66)", textDecoration: "none" }}>
            <NavLink to="/" className="navlink pt-1 border"> HOME </NavLink>
            <NavLink to="/AddMoviesForm" className="navlink pt-1 border"> AGGIUNGI FILM</NavLink>
            <button className={`btn ${showLoader ? "btn-primary" : "btn-secondary"} right`} onClick={switchLoader}> {showLoader ? "Disable Loader" : "Enable Loader"} </button>
        </nav>
    );

}