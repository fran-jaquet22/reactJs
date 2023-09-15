import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextoDelCarrito, ProviderCarrito } from "../contexto/Conexto";

/* const ValorActualDelContexto = useContext(ProviderCarrito */

const CartWidget = ()=>{

    const {cantidadTotal} = useContext(ContextoDelCarrito)
    console.log(cantidadTotal)

    return(
        <NavLink to="/carrito">
            <i className="material-icons">shopping_bag</i>
            {cantidadTotal}
        </NavLink>
    )
}
export default CartWidget