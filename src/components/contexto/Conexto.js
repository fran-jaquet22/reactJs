import { createContext, useEffect, useState } from "react"

export const ContextoDelCarrito = createContext({
    carrito: [],
    agregarItem: ()=>{},
    removerItem: ()=>{},
    limpiarCarrito: ()=>{},
    aumentarCantidad: ()=>{},
    disminuirCantidad: ()=>{},
    cantidadTotal: 0
})

export const ProviderCarrito = ({children}) =>{
    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    /* console.log(carrito) */

    useEffect(()=>{
        const newCantidadTotal = carrito.reduce((total, producto) =>total + producto.cantidad, 0)
        setCantidadTotal(newCantidadTotal)
    }, [carrito])

    const agregarItem = (item, cantidad) => {
        const productosEnIndex = carrito.findIndex(producto => producto.id === item.id)

        if(productosEnIndex !== -1){
            const refrescarCarrito = [...carrito]
            refrescarCarrito[productosEnIndex].cantidad += cantidad 
        } else{
            setCarrito(prev => [...prev, {...item, cantidad}])
        }
    }

    const removerItem = (itemId) => {
        const carritoActualizado = carrito.filter((producto)=> producto.id !== itemId)
        setCarrito(carritoActualizado)
    }

    const aumentarCantidad = (itemId) =>{
        const refrescarCarrito = carrito.map(producto => {
            if(producto.id === itemId){
                return { ...producto, cantidad:producto.cantidad + 1}
            }
            return producto
        })
        setCarrito(refrescarCarrito)
    }

    const disminuirCantidad = (itemId) => {
        const refrescarCarrito = carrito.map(producto => {
            if(producto.id === itemId && producto.cantidad > 1) {
                return{...producto, cantidad: producto.cantidad - 1}
            }
            return producto
        })
        setCarrito(refrescarCarrito)
    }

    const limpiarCarrito = ()=>{
        setCarrito([])
    }

    const contextoCarrito = {
        carrito,
        agregarItem,
        removerItem,
        aumentarCantidad,
        disminuirCantidad,
        limpiarCarrito,
        cantidadTotal
    }

    return (
        <ContextoDelCarrito.Provider value={contextoCarrito}>
            {children}
        </ContextoDelCarrito.Provider>
    )
    }