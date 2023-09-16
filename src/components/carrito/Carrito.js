import { useContext } from "react"
import { ContextoDelCarrito } from "../contexto/Conexto"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Carrito = () => {
  const { carrito, aumentarCantidad, disminuirCantidad, limpiarCarrito, cantidadTotal} = useContext(ContextoDelCarrito)

  const total = parseFloat(carrito.reduce((acc, producto)=> acc + producto.price * producto.cantidad, 0))


  if(cantidadTotal === 0){
    return(
      <div>
        <h1>
          no hay productos en el carrito
        </h1>
        <Link to="/">Volver a Home</Link>
      </div>
    )
  }

  return(
    <div>
      {carrito.map(producto => (
        <CartItem 
        key={producto.id} 
        {...producto}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        />))}
        
      <div className="flex justify-center my-2">
        <h3> <strong>Total:</strong>&nbsp;${total} </h3>
      </div>
      <div className="flex justify-center mb-2">
        <button className="mr-20 border-2 border-zinc-900 rounded-md px-4 py-2" onClick={()=>limpiarCarrito()}>Vaciar carrito</button>
        <Link to='/checkout' className="ml-20 border-2 border-zinc-900 rounded-md px-4 py-2"> Confirmar Compra</Link>
      </div>
      <div className="flex justify-center">
      </div>
    </div>
  )
    

}

export default Carrito