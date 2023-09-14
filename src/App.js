import { BrowserRouter } from "react-router-dom";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import "../src/components/db/firebase"
import {ProviderCarrito} from "./components/contexto/Conexto";


function App() {

  return (
    <BrowserRouter>
      <ProviderCarrito>
        <Header />
        <Main/>
        <Footer />
      </ProviderCarrito>
    </BrowserRouter>
  );
}

export default App;
