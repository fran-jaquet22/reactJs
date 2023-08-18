import { Routes, Route } from "react-router-dom"
import Container from "./components/Container"

function Main(){
 
    return(
        <main className={"p-2 grow bg-pink-950 text-white"}>
            {/* <Container/> */}
            <Routes>
                <Route path="/" element={<Container/>}/>
                <Route path="/cat/:category" element={<Container/>}/>
                <Route path="/carrito" element={<p>Carrito</p>}/>
            </Routes>
        </main>
    )
}


export default Main