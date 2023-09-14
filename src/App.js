import { BrowserRouter } from "react-router-dom";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import "../src/components/db/firebase"
import MiProviderCarrito from "./components/contexto/Conexto";


function App() {

  return (
    <BrowserRouter>
      <MiProviderCarrito>
        <Header />
        <Main/>
        <Footer />
      </MiProviderCarrito>
    </BrowserRouter>
  );
}

export default App;
