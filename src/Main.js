import { Routes, Route } from "react-router-dom"
import Container from "./components/Container"
import DetallesProducto from "./components/DetallesProducto"
import Carrito from "./components/Carrito"

function Main(){
 
    return(
        <main className="p-2 h-full grow bg-pink-950 text-white">
            <Routes>
                <Route path="/" element={<Container/>}/>
                <Route path="/prod/:itemId" element={<DetallesProducto/>}/>
                <Route path="/category/:categoryId" element={<Container/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </main>
    )
}


export default Main