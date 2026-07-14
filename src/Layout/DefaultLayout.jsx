import NavBar from "../Components/Navbar";
import {Outlet} from "react-router-dom"

export default function DefaultLayout({Loader}) {
    return (
        <>
            <NavBar Loader={Loader}/>
            <main>
                <Outlet/>
            </main>
        </>
        )
}