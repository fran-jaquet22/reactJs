import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./Conexto"

function CartWidget (){

    const ValorDelContexto = useContext(contexto)
    return(
        <NavLink to="/carrito">
            <i className="material-icons">shopping_bag</i>
            <span>{ValorDelContexto.cantidadTotal}</span>
        </NavLink>
    )
}
export default CartWidget