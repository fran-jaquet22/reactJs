import { useContext } from "react"
/* import { MiProviderCarrito } from "../contexto/Conexto" */
import { db } from "../db/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { ContextoDelCarrito } from "../contexto/Conexto"

const ventasCollection = collection(db, "ventas")

const Carrito = ({id, title, img, price, cantidad}) => {
  const { removerItem, aumentarCantidad, disminuirCantidad } = useContext(ContextoDelCarrito)


  return(
  <article className={``}>
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
    </article>
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
