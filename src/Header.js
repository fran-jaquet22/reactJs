import { Link } from "react-router-dom"
import NavLinks from "./components/NavLinks"

function Header () {
    return(
        <header id="header" className="header flex justify-between py-7 px-5 bg-pink-700">
            <Link to="/">
                <h1 className="text-3xl italic fot-bold"><a href="#">ShopTop</a></h1>
            </Link>
            <NavLinks />
        </header> 
    )
}

export default Header