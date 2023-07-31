function Main(props){

    let contador = 0

    const handleClick = () => {
        contador ++
        console.log(contador)
    }

    return(
        <main className="p-2 grow">
            <p>contador : {contador}</p>
            <button onClick={handleClick}>click</button>
        </main>
    )
}

export default Main