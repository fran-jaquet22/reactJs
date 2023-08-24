import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavLinks (){
    return(
        <nav className="py-14">
            <NavLink className={({isActive})=> isActive ? `ActiveOption p-2 mx-2 active` : `Option p-2 mx-2`} to={'/category/Merienda'}  >Merienda</NavLink>
            <NavLink className={({isActive})=> isActive ? `ActiveOption p-2 mx-2 active` : `Option p-2 mx-2`} to={'/category/Evento'}>Eventos</NavLink>
            <NavLink className={({isActive})=> isActive ? `ActiveOption p-2 mx-2 active` : `Option p-2 mx-2`} to={'/category/Frutal'}>Frutales</NavLink>
            <CartWidget/>
        </nav>
    )
    }
export default NavLinks

/* p-2 mx-2 */