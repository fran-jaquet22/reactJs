import { useContext } from "react"
import { contexto } from "./Conexto"


function Carrito() {
  const ValorActualDelContexto = useContext(contexto)

  return (
    <div>Carrito</div>
  )
}
export default Carrito