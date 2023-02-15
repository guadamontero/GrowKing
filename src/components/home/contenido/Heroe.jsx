import React from "react";
import { Link } from "react-router-dom";

const Heroe = () => {
  return (
    <section className="heroe__container">
      <h2 className="heroe__title">¡Comprá tus semillas en nuestra tienda!</h2>
      <Link to={"/productos"}><button className="heroe__button">Catálogo</button></Link>
      <p className="heroe__ley">
      * Contamos con la inscripción en el Instituto Nacional de Semillas, su objetivo principal es garantizar la calidad de las semillas que se utilizan para el cultivo. El mismo se encarga de regular y controlar la producción, el comercio y el uso de semillas en el país. 
      </p>
    </section>
  );
};

export default Heroe;
