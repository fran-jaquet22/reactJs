import { Link } from "react-router-dom"

function Presentacional(props) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4">
            {props.data.length == 0 ? <p>Cargando Productos...</p> 
            : props.data.map((item,i)=>{
                return(
                    <article key={i} className="border-2 border-zinc-900 rounded-md card shadow-2xl p-4 hover:scale-105 transition duration-150">
                        <h2 className="h-30 p-5 uppercase">{item.title}</h2>
                        <img className="h-72 pb-2" src={item.img} alt="" />
                        <h3 className="my-4">${item.price}</h3>
                        <Link className="inset-x-0 bottom-0 py-2 px-2 h-14 w-28 bg-lime-900 rounded hover:bg-lime-950" to={`/prod/${item.id}`}>Ver detalles</Link>
                    </article>
                )
            })}
        </section>
    )
}

export default Presentacional