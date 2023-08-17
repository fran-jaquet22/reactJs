import { useRef } from "react"

function Form() {

    const nombreRef = useRef(null)

    return (
        <div>
            <input ref={nombreRef} type="text" placeholder="Ej: Francisco" id="nombre" />
            <button></button>
        </div>
    ) 
}

export default Form