import { useContext, useState } from "react"
import { ContextoDelCarrito } from "../contexto/Conexto"
import { db } from "../db/firebase"
import { getDocs, collection } from "firebase/firestore"


const CartItem= () =>{
    const { removerItem, aumentarCantidad, disminuirCantidad} = useContext(ContextoDelCarrito)
    const productosCollection = collection(db, "productos")

    return (
        <article>
            <div>
                <img src={productosCollection.img} alt={productosCollection.title} />
            </div>

            <div>
                <h2>{productosCollection.tilte}</h2>
                <p>${productosCollection.price}</p>
            </div>

            <div>
                <button onClick={()=>{disminuirCantidad(productosCollection.id)}}>
                    -
                </button>
                <p>
                    cantidad: {}
                </p>

                <button onClick={()=>{aumentarCantidad(productosCollection.id)}}>
                    +
                </button>

                <button onClick={()=>{removerItem(productosCollection.id)}}>
                    Eliminar
                </button>

            </div>
        </article>
    )

}
  







export default CartItem