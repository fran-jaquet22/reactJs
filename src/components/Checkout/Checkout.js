import { useContext, useState } from "react"
import { collection, getDocs, query, where, documentId, addDoc, Timestamp, writeBatch } from "firebase/firestore"
import { ContextoDelCarrito } from "../contexto/Conexto";
import { db } from "../db/firebase";
import { Link } from "react-router-dom"
import CheckoutForm from "./CheckoutForm"

const Checkout = () => {
    const [cargando, setCargando] = useState(false)
    const [compraId, setCompraId] = useState(``)
    const [objOrder, setObjOrder] = useState(null)
    const ContextoCarrito = useContext(ContextoDelCarrito)
    const { carrito, limpiarCarrito } = ContextoCarrito

    const compra = async ({nombre, tel, email}) =>{
        setCargando(true)

        try{
            const newCompra = {
                comprador:{
                    nombre,
                    tel,
                    email
                },
                productos: carrito.map(producto=>({
                    id: producto.id,
                    title: producto.title,
                    cantidad: producto.cantidad,
                    price: producto.price,
                    subtotal: producto.cantidad * producto.price
                })),
                total: carrito.reduce((acc, producto)=> acc + producto.cantidad * producto.price, 0),
                fecha: Timestamp.fromDate(new Date())
            }
            const coleccion = writeBatch(db)

            const fueraDeStock = []

            const ids = carrito.map(producto=> producto.id)

            const refDeProductos = collection(db, "productos")

            const productosAgregadosFirestore = await getDocs(query(refDeProductos, where(documentId(), "in", ids)))

            const { docs } = productosAgregadosFirestore

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productoEnCarrito = carrito.find(producto=> producto.id === doc.id)
                const cantidadDeProductos = productoEnCarrito?.cantidad

                if(stockDb >= cantidadDeProductos){
                    coleccion.update(doc.ref, {stock: stockDb - cantidadDeProductos})
                }else{
                    fueraDeStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(fueraDeStock.length === 0){
                await coleccion.commit()

                const referenciaDeCompra = await addDoc(collection(db, "compras"), newCompra)
                setCompraId(referenciaDeCompra.id)
                limpiarCarrito()
                setObjOrder(newCompra)
            }else{
                console.log("Fuera de stock")
            }
        } catch(error){
            console.log(error)
        } finally{
            setCargando(false)
        }
    } 

    return(
        <div>
            <h1 className="flex justify-center text-6xl italic my-12">Checkout</h1>
            {cargando ? (
                <h2>Se esta finalizando la compra...</h2>
            ) : compraId ? (
                <div >
                    <div >
                        <div className="flex justify-center text-2xl mb-4">
                            <h2>Gracias por su compra</h2>
                        </div>
                        <div className="flex justify-center text-2xl mb-4">
                            <h2>El ID de su orden es: <strong>{compraId}</strong> </h2>
                        </div> 
                    </div>
                    <div>
                        <div className="flex justify-center"><h3 >E-Ticket</h3></div>
                        <div className="flex justify-center">
                            <ul>
                                {objOrder &&
                                    objOrder.productos.map((producto) => (
                                        <li key={producto.id} >
                                            <div className="row">
                                                <div className="col-6">
                                                    <p><strong>Producto:</strong> {producto.title}</p>
                                                    <p><strong>Cantidad:</strong> {producto.cantidad}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Precio unitario:</strong> ${producto.price}</p>
                                                    <p><strong>Subtotal:</strong> ${producto.subtotal}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </ul>                           
                        </div>
                        <div className="flex justify-center my-6"><p>Total: ${objOrder && objOrder.total}</p></div>
                        <div className="flex justify-center border-2 border-zinc-900 rounded-md px-4 py-2">
                            <Link to="/">Volver al inicio</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <CheckoutForm confirmado={compra} /> 
            )}
        </div>
    )
}

export default Checkout;

