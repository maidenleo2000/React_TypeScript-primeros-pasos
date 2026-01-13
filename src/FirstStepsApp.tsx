// import React from "react";
import { ItemCounter } from "./shooping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Obseever Pro Edition", quantity: 5 },
];

const FirstStepsApp = () => {
  return (
    <>
      <h1>Carrito de Compras</h1>
      {/* en vez de () => {} como es la fucion flecha los parentesis al final () => () quiere decir que INMEDIATAMENTE devuelva ese objeto, es un return implícito */}
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <p>Esto es un parrafo</p>

      <button>Prueba de boton</button>

      <div>
        <h2>Hola dentro de un div</h2>
      </div> */}
      {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
      <ItemCounter name="Pro Controller" quantity={2} />
      <ItemCounter name="Observer pro Edition" quantity={3} /> */}
    </>
  );
};

export default FirstStepsApp;
