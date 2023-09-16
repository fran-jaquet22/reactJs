import React, { useState } from "react"

const CheckoutForm = ({ confirmado }) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

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
          <div >
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              className={`m-2`}
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className={`m-2`}>
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              className={`m-2`}
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </div>
          <div className={`m-2`}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              className={`m-2`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={`m-2`}>Confirmar Orden</button>
        </form>
      );
};

export default CheckoutForm;