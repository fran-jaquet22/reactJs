import { createContext, useState } from "react"

/* export const MiProviderCarrito = createContext({
    carrito : []
})

export const ProviderCarrito = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    console.log(carrito)

    const agregarItem = (item, cantidad)=>{
        if(!estaEnElCarrito(item.id)){
            setCarrito(prev => [...prev, {...item, cantidad}])
        } else {
            console.log("el producto ya esta en el carrito")
        }
    }

    const sacarItem = (itemId)=>{
        const carritoActualizado = carrito.filter(prod => prod.id !== itemId)
        setCarrito(carritoActualizado)
    }

    const limpiarCarrito= ()=>{
        setCarrito({})
    }

    const estaEnElCarrito = (itemId)=>{
        return carrito.some(prod => prod.id === itemId)
    }

return (
    <MiProviderCarrito.Provider value={{carrito, agregarItem, sacarItem, limpiarCarrito, estaEnElCarrito}}>
        {children}
    </MiProviderCarrito.Provider>
)
}

export default MiProviderCarrito */
export const contexto = createContext()
const Provider = contexto.Provider

const MiProviderCarrito = (props) => {
    const ValorDelContexto = {
        carrito : [],
    }

    

    return(
        <Provider value={ValorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default MiProviderCarrito

