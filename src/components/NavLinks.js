import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavLinks (){
    return(
        <nav className="">
            <NavLink className="p-2" to="/cat/jewelery">categoria 1</NavLink>
            <NavLink className="p-2 mx-2" to="/cat/electronics">categoria 2</NavLink>
            <NavLink className="p-2 mx-2" to="/cat/3">categoria 3</NavLink>
            <NavLink className="p-2 mr-2" to="/cat/4">categoria 4</NavLink>
            <CartWidget/>
        </nav>
    )
    }
export default NavLinks