import { useContext } from "react"
import { contexto } from "./Conexto"


function Carrito() {
  const ValorActualDelContexto = useContext(contexto)

  console.log(ValorActualDelContexto)
  return (
    <div>Carrito</div>
  )
}
export default Carrito