import { Link } from "react-router-dom"

function Presentacional(props) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4">
            {props.data.length == 0 ? <p>Cargando Productos...</p> 
            : props.data.map((item,i)=>{
                return(
                    <article key={i} className="border-2 border-zinc-900 rounded-md card shadow-2xl p-4 hover:scale-105 transition duration-150">
                        <h2 className="h-30 p-5 uppercase flex justify-center ">{item.title}</h2>
                        <div className="flex justify-center">
                            <img className="h-60 pb-2 rounded-md" src={item.img} alt="" />
                        </div>
                        <h3 className="my-4 flex justify-center">${item.price}</h3>
                        <div className="flex justify-center">
                            <Link className="inset-x-0 bottom-0 py-4 px-4  bg-lime-900 rounded hover:bg-lime-950 " to={`/prod/${item.id}`}>Ver detalles</Link>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Presentacional