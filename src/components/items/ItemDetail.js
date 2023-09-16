import { useContext, useState } from "react";
import { ContextoDelCarrito } from "../contexto/Conexto";
import { Link } from "react-router-dom";
import Contador from "../Contador";

const ItemDetail = ({id, title, img, category, description, price, stock}) => {
    const {agregarItem} = useContext(ContextoDelCarrito)
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
   

    const agregado = (cantidad) => {
        setCantidadAgregada(cantidad)
        setPrecioTotal(cantidad * price)
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
        <article className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-6 p-4 border-2 border-zinc-900 rounded-md card shadow-2xl p-4">
            <header>
                <h2 className="h-30 p-5 text-center mt-4 text-4xl"> <strong>{title}</strong></h2>
            </header>
            <div className="flex justify-center ">
                <img
                    src={img}
                    alt={title}
                    className="h-72 rounded-lg"
                />
            </div>
            <section className="mx-6 pl-6">
                <div>
                    <p className="flex justify-center"> <strong>Categoría:</strong> {category}</p>
                    <p className="flex justify-center"><strong>Descripción:</strong> {description}</p>
                    <p className="flex justify-center"><strong>Precio:</strong> ${price}</p>
                    <p className="flex justify-center"><strong>Stock:</strong> {stock}</p> 
                </div>
                {cantidadAgregada > 0 && (
                    <div className="">
                        <p className="flex justify-center"><strong>cantidad seleccionada:</strong> &nbsp; {cantidadAgregada}</p>
                        <p className="flex justify-center"><strong>precio total:</strong> &nbsp; ${precioTotal}</p>
                    </div>
                )}
            </section>
            <section className="mt-5 mb-5">
                {cantidadAgregada > 0 ? (
                        <Link to='/carrito'>
                            <div className="flex justify-center font-bold border-2 border-zinc-900 rounded-md px-4 py-2" onClick={finalizarCompra}>Finalizar compra</div>
                        </Link>
                    ) : <Contador inicial={1} stock={stock} agregar={agregado}/>}
            </section>
        </article>
    );
}

export default ItemDetail
/* <Contador inicial={1} stock={stock} agregar={agregado}/> */