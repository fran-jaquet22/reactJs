import { createContext } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const MiProvider = (props) => {
    const ValorDelContexto = {
        carrito : [],
        montoToltal : 0,
        cantidadTotal : 0,
    }
    return(
        <Provider value={ValorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default MiProvider