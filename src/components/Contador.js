import { useState } from "react"

function Contador({stock, inicial, agregar}) {
  let [cantidad, setCantidad] = useState(inicial)

  const sumar = () => {
    if(cantidad < stock){
        setCantidad(cantidad + 1)
    }
  } 
  const restar = () => {
    if(cantidad > 1){
        setCantidad(cantidad - 1 )
    }
  } 
  const agregarAlCarrito = ()=> {
    if(cantidad > 0){
        agregar(cantidad)
        setCantidad(inicial)
    }
  }
  if(cantidad === 0){
    return(
        <div className="">
            <p >Cantidad: {cantidad}</p>
            <button className="mb-2 border-2 border-zinc-900 rounded-md " onClick={sumar}>+</button>
        </div>
    )} else{
        return(
            <div>
                <p className="flex justify-center mb-2">Cantidad: {cantidad}</p>
                <div className="flex justify-center">
                    <button className="pr-4 pl-4 mr-2 mb-2 border-2 border-zinc-900 rounded-md " onClick={sumar}>+</button>
                    <button className="pr-4 pl-4 mb-2 border-2 border-zinc-900 rounded-md " onClick={restar}>-</button>
                </div>
                <div className="flex justify-center">
                    <button className="p-4 mr- border-2 border-zinc-900 rounded-md" onClick={agregarAlCarrito}>agregar al carrito</button>
                </div>
            </div>
        )
    } 
}
export default Contador