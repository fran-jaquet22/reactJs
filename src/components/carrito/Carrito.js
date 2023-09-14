import { useContext } from "react"
/* import { MiProviderCarrito } from "../contexto/Conexto" */
import { db } from "../db/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"


function Carrito() {
  /* const ValorActualDelContexto = useContext(MiProviderCarrito) */

  const onBuy = ()=> {

    const ventasCollection = collection(db, "ventas")

  }

  return (
    <div>
      
    </div>
  )
}
export default Carrito