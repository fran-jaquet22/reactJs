import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextoDelCarrito } from "../contexto/Conexto";

const CartWidget = ()=>{

    const {cantidadTotal} = useContext(ContextoDelCarrito)

    return(
        <NavLink to="/carrito">
            <i className="material-icons text-3xl">shopping_bag</i>
            <span>{cantidadTotal}</span>
        </NavLink>
    )
}
export default CartWidget