import { useContext, useState } from "react"
/* import { MiProviderCarrito } from "../contexto/Conexto" */
import { ContextoDelCarrito } from "../contexto/Conexto"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import { db } from "../db/firebase"
import { collection } from "firebase/firestore"

const Carrito = ({id, title, img, price, cantidad}) => {
  const { carrito, removerItem, aumentarCantidad, disminuirCantidad, limpriarCarrito, cantidadTotal} = useContext(ContextoDelCarrito)

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
      


      <div>
        <h3>Total: ${total} </h3>
      </div>
    </div>
  )
    

}

export default Carrito



/* function Carrito() {
  const ValorActualDelContexto = useContext(MiProviderCarrito)

  const onBuy = ()=> {

    const ventasCollection = collection(db, "ventas")

  }

  return (
    <div>
      
    </div>
  )
}*/

/* <article className={``}>
      <div className="row g-0">
        <div className="col-md-4 col-sm-12">
          <div className="image-container">
            <img src={img} alt={title} className="img-fluid cart-item-img"/>
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">${price}</p>
            <div className="d-flex align-items-center">
              <button
                className={""}
                onClick={() => disminuirCantidad(id)}
              >
                -
              </button>
              <p className="card-text">Cantidad: {cantidad}</p>
              <button
                className={""}
                onClick={() => aumentarCantidad(id)}
              >
                +
              </button>
            </div>
            <button
              className={""}
              onClick={() => removerItem(id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </article> */