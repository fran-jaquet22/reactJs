import { Routes, Route } from "react-router-dom"
import Container from "./components/Container"
import DetallesProducto from "./components/DetallesProducto"

function Main(){
 
    return(
        <main className={"p-2 grow bg-pink-950 text-white"}>
            <Routes>
                <Route path="/" element={<Container/>}/>
                <Route path="/prod/:itemId" element={<DetallesProducto/>}/>
                <Route path="/category/:categoryId" element={<Container/>}/>
                <Route path="/carrito" element={<p>Carrito</p>}/>
            </Routes>
        </main>
    )
}


export default Main