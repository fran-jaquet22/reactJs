import { useContext } from "react"
import { ContextoDelCarrito } from "../contexto/Conexto"


const CartItem= ({id, title, img, price, cantidad}) =>{
    const { removerItem, aumentarCantidad, disminuirCantidad} = useContext(ContextoDelCarrito)

    return (
        <article>
            <div>
                <img src={img} alt="{title}" />
            </div>

            <div>
                <h2>{title}</h2>
                <p>${price}</p>
            </div>

            <div>
                <button onClick={()=>{disminuirCantidad(id)}}>
                    -
                </button>
                <p>
                    cantidad: {cantidad}
                </p>

                <button onClick={()=>{aumentarCantidad(id)}}>
                    +
                </button>

                <button onClick={()=>{removerItem(id)}}>
                    Eliminar
                </button>

            </div>
        </article>
    )

}
  







export default CartItem