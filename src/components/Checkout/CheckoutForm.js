import React, { useState } from "react"

const CheckoutForm = ({ confirmado }) => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")

    const enviar = (e) => {
        e.preventDefault();

        const userData = {
            nombre,
            tel,
            email,
        };


        confirmado(userData);
    };

    return (
        <form onSubmit={enviar} >
          <div className="flex justify-center">
            <label htmlFor="name" className="italic text-2xl">Nombre y Apellido:</label>
            <input
              type="text"
              className=" ml-2 border-solid border-4 border-pink-900 rounded text-black"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <label htmlFor="phone" className="italic text-2xl">Teléfono:</label>
            <input
              type="number"
              className=" ml-2 border-solid border-4 border-pink-900 rounded text-black"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <label htmlFor="email" className="italic text-2xl">Correo Electrónico:</label>
            <input
              type="email"
              className=" ml-2 border-solid border-4 border-pink-900 rounded text-black"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center mt-6">
            <button type="submit" className="border-2 border-zinc-900 rounded-md px-4 py-2">Confirmar Orden</button>
          </div>
        </form>
      );
};

export default CheckoutForm;