import { Routes, Route } from "react-router-dom"
import Container from "./components/items/Container"
import DetallesProducto from "./components/items/DetallesProducto"
import Carrito from "./components/carrito/Carrito"

function Main(){
 
    return(
        <main className="p-2 h-full grow bg-pink-800 text-white">
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