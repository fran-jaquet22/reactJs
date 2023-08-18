function Presentacional(props) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 p-4">
            {props.data.length  == 0 ? <p>Cargando Productos...</p> 
            : props.data.map((item,i)=>{
                return(
                    <article key={i} className="border-2 border-zinc-900 rounded-md card shadow-2xl p-4 hover:scale-105 transition duration-150">
                        <h2 className="h-30 p-5 uppercase">{item.title}</h2>
                        <img className="h-72 pb-5" src={item.image} alt="" />
                        <h3 className="">${item.price}</h3>
                        <button onClick={()=>{}} className="inset-x-0 bottom-0 mt-6 h-14 w-28 bg-lime-900">Ver producto</button>
                    </article>
                )
            })}
        </section>
    )
}

export default Presentacional