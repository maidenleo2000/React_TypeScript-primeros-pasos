import React from "react";
import { ItemCounter } from "./shooping-cart/ItemCounter";

const FirstStepsApp = () => {
  return (
    <>
      <h1>Carrito de Compras</h1>
      {/* <p>Esto es un parrafo</p>

      <button>Prueba de boton</button>

      <div>
        <h2>Hola dentro de un div</h2>
      </div> */}
      <ItemCounter name="Nintendo Switch 2" />
      <ItemCounter name="Pro Controller" />
      <ItemCounter name="Observer pro Edition" />
    </>
  );
};

export default FirstStepsApp;
