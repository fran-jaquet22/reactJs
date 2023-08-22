import { useEffect, useState } from "react"
import { getProductById, id } from "../asynkMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

function DetallesProducto() {

  const [product, setProduct] = useState(null)

  const {itemId} = useParams()

  useEffect(()=>{
    getProductById(itemId)
      .then(res => {
        setProduct(res)
      })
      .catch(error=>{
        console.error(error)
      })
  }, [itemId])

  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default DetallesProducto