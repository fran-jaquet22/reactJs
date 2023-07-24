import Header from "./Header";

//M primer componente
/*
Componentes:

1- Son funciones
2- Van en mayuscula
3- Todos tienen return
4- Siempre deben retornar un solo elemento

*/

function App() {
  //vista
  return (
    <>
      {/* <header>
        <h1>hola mundo</h1>
      </header> */}

      <Header />

      <main>
        <h2>Home</h2>
      </main>

      <footer>
        <p>Copyright &copy;</p>
      </footer>
    </>
  );
}

export default App;
