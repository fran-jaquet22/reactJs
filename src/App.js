import { BrowserRouter } from "react-router-dom";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import MiProvider from "./components/Conexto";
import "../src/components/db/migrations"


function App() {

  return (
    <BrowserRouter>
      <MiProvider>
        <Header />
        <Main/>
        <Footer />
      </MiProvider>
    </BrowserRouter>
  );
}

export default App;
