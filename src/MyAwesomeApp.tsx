import { type CSSProperties } from "react";

const firsName = " Leandro ";
const lastName = "Martello";

const favoriteGames = ["Mafia", "Duke Nukem", "Assasins Creed"];
const isActive = true;

const myStyles: CSSProperties = {
  backgroundColor: isActive ? "lightgreen" : "lightpink",
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
};

const address = {
  zipCode: "ABC123",
  country: "Argentina",
};

const MyAwesomeApp = () => {
  return (
    <>
      <h1 data-testid="first-name-title">{firsName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p>{address.zipCode}</p>
      <p>{address.country}</p>

      <p>Objeto literal</p>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};

export default MyAwesomeApp;
