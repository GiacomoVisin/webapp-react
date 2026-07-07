import NavBar from "../Components/Navbar";
import {Outlet} from "react-router-dom"

export default function DefaultLayout() {
    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
        )
}