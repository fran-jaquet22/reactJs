import { useContext } from "react"
import { ContextoDelCarrito } from "../contexto/Conexto"


const CartItem= ({id, title, img, price, cantidad}) =>{
    const { removerItem, aumentarCantidad, disminuirCantidad} = useContext(ContextoDelCarrito)

    return (
        <article>
            <div className="py-6">
                <h2 className="flex justify-center">{title}</h2>
            </div>

            <div className="pb-6 flex justify-center">
                <img className="h-60" src={img} alt="{title}" />
            </div>

            <div className="flex justify-center pb-4">
                <p>${price}</p>
            </div>

            <div>
                <p className="flex justify-center mb-2 mr-2">
                   <strong>cantidad:</strong>&nbsp;{cantidad}
                </p>
                <div>
                    <div className="flex justify-center " >
                        <button className="flex justify-center pr-4 pl-4 mr-2 mb-2 border-2 border-zinc-900 rounded-md" onClick={()=>{disminuirCantidad(id)}}>
                            -
                        </button> 
                        <button className="flex justify-center pr-4 pl-4 mr-2 mb-2 border-2 border-zinc-900 rounded-md" onClick={()=>{aumentarCantidad(id)}}>
                            +
                        </button> 
                    </div>
                    <div className="flex justify-center">
                        <button className="flex justify-center pr-4 pl-4 mr-2 mb-2 border-2 border-zinc-900 rounded-md" onClick={()=>{removerItem(id)}}>
                            Eliminar
                        </button>   
                    </div>
                </div>                
            </div>
        </article>
    )

}

export default CartItem