import React from 'react'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 p-4 border-2 border-zinc-900 rounded-md card shadow-2xl p-4 hover:scale-105 transition duration-150">
            <header>
                <h2 className="h-30 p-5 uppercase">{name}</h2>
            </header>
            <picture className="">
                <img
                    src={img}
                    alt={name}
                    className=""
                />
            </picture>
            <section className="card-body">
                <p className="Info card-text">Categoría: {category}</p>
                <p className="Info card-text">Descripción: {description}</p>
                <p className="Info card-text">Precio: ${price}</p>

            </section>
        </article>
    );
}

export default ItemDetail