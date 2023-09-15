import { useState } from "react"

function Contador({stock, inicial, agregar}) {
  let [cantidad, setCantidad] = useState(inicial)

  const sumar = () => {
    if(cantidad < stock){
        setCantidad(cantidad ++)
    }
  } 
  const restar = () => {
    if(cantidad > 1){
        setCantidad(cantidad -- )
    }
  } 
  /* const vaciar = () => setCantidad(0)  */
  const agregarAlCarrito = ()=> {
    if(cantidad > 0){
        agregar(cantidad)
        setCantidad(inicial)
    }
  }
  if(cantidad === 0){
    return(
        <div>
            <p>Cantidad: {cantidad}</p>
            <button onClick={sumar}>+</button>
        </div>
    )} else{
        return(
            <div>
                <p>Cantidad: {cantidad}</p>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={agregarAlCarrito}>agregar al carrito</button>
            </div>
        )
    } 
}
export default Contador