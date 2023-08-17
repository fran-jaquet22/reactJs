import CartWidget from "./components/CartWidget"
import NavLinks from "./components/NavLinks"

function Header () {
    return(
        <header id="header" className="header flex justify-between py-7 px-5 bg-pink-700">
            <h1 className=""><img className="logoHome" src="logoLara.jpg" alt="" /></h1>
            <NavLinks />
            <CartWidget/>
        </header> 
    )
}

export default Header