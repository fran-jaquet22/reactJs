import { Link } from "react-router-dom"
import NavLinks from "./components/NavLinks"

function Header () {
    return(
        <header id="header" className="header flex justify-between py-7 px-5 bg-pink-500">
            <Link to="/">
                <img src="./logoDeli.jpeg" className="h-40" alt="Delicias Caseras logo" />
            </Link>
            <NavLinks />
        </header> 
    )
}

export default Header