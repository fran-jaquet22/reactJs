import { useContext, useState } from "react";
import { ContextoDelCarrito } from "../contexto/Conexto";
import { Link } from "react-router-dom";
import Contador from "../Contador";

const ItemDetail = ({id, title, img, category, description, price }) => {
    const {agregarItem, aumentarCantidad} = useContext(ContextoDelCarrito)
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
   

    const agregado = (cantidad) => {
        setCantidadAgregada(cantidad)
        setCantidadAgregada(cantidad + 1)
    }

    const finalizarCompra = ()=>{
        if(cantidadAgregada > 0){
            const item = { id, img, title, price}
            agregarItem(item, cantidadAgregada)
        } else {
            console.log("no se pudo")
        }
    }

    return (
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 p-4 border-2 border-zinc-900 rounded-md card shadow-2xl p-4">
            <header>
                <h2 className="h-30 p-5 text-center mt-16">{title}</h2>
            </header>
            <picture className="">
                <img
                    src={img}
                    alt={title}
                    className="h-60"
                />
            </picture>
            <section className="mt-14 pl-6">
                <p className="">Categoría: {category}</p>
                <p className="">Descripción: {description}</p>
                <p className="">Precio: ${price}</p>
                <Link to= "/carrito">
                <button onClick={agregado}>Agregar al carrito</button>
                </Link>
            </section>
            <section>
                <Contador/>
            </section>
        </article>
    );
}

export default ItemDetail