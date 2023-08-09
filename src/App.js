import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Header />

      <ItemListContainer greeting="Hola! Bienvenido!"/>

      <Main/>

      <Footer />
    </>
  );
}

export default App;
