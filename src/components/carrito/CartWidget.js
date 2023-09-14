import { useContext } from "react"
import { NavLink } from "react-router-dom"
/* import { contexto } from "../contexto/Contecto" */

function CartWidget (){

    /* const ValorDelContexto = useContext(contexto) */
    return(
        <NavLink to="/carrito">
            <i className="material-icons">shopping_bag</i>
        </NavLink>
    )
}
export default CartWidget