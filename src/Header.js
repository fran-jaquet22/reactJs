import IconoCart from "./IconoCart"
import NavLinks from "./NavLinks"

function Header () {
    return(
        <header id="header" className="header flex justify-between py-7 px-5 bg-pink-800">
            <h1 className="">Delicias Caseras</h1>
            <NavLinks />
            <IconoCart/>
        </header> 
    )
}

export default Header