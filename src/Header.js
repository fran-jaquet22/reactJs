import { Link } from "react-router-dom"
import NavLinks from "./components/NavLinks"

function Header () {
    return(
        <header id="header" className="header flex justify-between py-7 px-5 bg-pink-700">
            <Link to="/">
                <img src="./logoDeli.jpeg" className="h-40" alt="" />
            </Link>
            <NavLinks />
        </header> 
    )
}

export default Header