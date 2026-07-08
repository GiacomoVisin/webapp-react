import { NavLink } from "react-router-dom"


export default function NavBar() {

    return (
         
        <nav style={{ display: "flex", gap: "50px", padding: "10px", background: "#eee", textDecoration: "none"}}>
            <NavLink to="/" className="navlink" style={{ color: "black" }}> HOME </NavLink>
        </nav>
    );
    
}