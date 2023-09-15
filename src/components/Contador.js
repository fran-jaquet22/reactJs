import { useState } from "react"

function Contador(props) {
  let [contador, setContador] = useState(0)

  const sumar = () => setContador(contador + 1) 
  const restar = () => setContador(contador - 1) 
  const vaciar = () => setContador(0) 
  const confirmar = ()=> {
    
  }
  if(contador == 0){
    return(
        <div>
            <p>Cantidad: {contador}</p>
            <button onClick={sumar}>+</button>
        </div>
    )} else{
        return(
            <div>
                <p>Cantidad: {contador}</p>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={vaciar} className="m-2">Vaciar</button>
                <button onClick={confirmar}>agregar al carrito</button>
            </div>
        )
    } 
}
export default Contador