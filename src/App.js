import { BrowserRouter } from "react-router-dom";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import MiProviderCarrito from "./components/contexto/Conexto";
import "../src/components/db/migrations"


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
