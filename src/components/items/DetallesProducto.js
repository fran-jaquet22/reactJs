import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../db/firebase"

function DetallesProducto() {

  const [product, setProduct] = useState(null)

  const {itemId} = useParams()

  useEffect(()=>{

    const docRef = doc(db, "productos", itemId)

    getDoc(docRef)
      .then(res => {
        const data = res.data()
        const productoAdaptado = {id: res.id, ...data}
        setProduct(productoAdaptado)
      })
      .catch(error=>{
        console.error(error)
      })
  }, [itemId])

  return (
    <div>
      {product ? <ItemDetail {...product}/> : <p>Cargando...</p>}
    </div>
  )
}

export default DetallesProducto