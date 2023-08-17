import { useState } from "react"
import Contador from "./components/Contador"
import Form from "./components/Form"

function Main(){
    
    const [dark, setDark] = useState(false)

    const toogleDark = ()=>{
        setDark(!dark)
    }
 
    return(
        <main className={dark ? "p-2 grow bg-slate-600 text-white" : "p-2 grow bg-white"}>
            <button onClick={toogleDark} className="border p-2">modo oscuro/claro</button>
            <Contador/>
            <hr />
            <Form/>
        </main>
    )
}


export default Main