import { useState } from "react"

function Contador(){

    let [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    const reset = () => {
        setContador(0)
    }

    return(
        <>
            <p>contador : {contador}</p>
            <button className="border p-2" onClick={sumar}>sumar</button>
            <button className="border p-2" onClick={restar}>restar</button>
            <button className="border p-2" onClick={reset}>reset</button>
        </>
    )
}

export default Contador