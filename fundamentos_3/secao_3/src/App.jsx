import { useState } from "react";
import "./App.css";
import ImagemAsset from "./assets/images.jpeg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0 },
    { id: 2, brand: "Fiat", color: "Azul", newCar: false, km: 12387 },
    { id: 3, brand: "KIA", color: "Preto", newCar: false, km: 10021 },
    { id: 4, brand: "BYD", color: "Branca", newCar: true, km: 0 },
  ];

  function showMessage() {
    console.log("Executado");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div>
      <h1>Seção 3</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={ImagemAsset} alt="Random" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Gabriel" />
      {/*Destruction */}
      <CarDetails brand="VW" km={23213} color="Azul" />
      {/*Reaproveitamento */}
      <CarDetails brand="Chevrolet" km={11111} color="Vermelho" />
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails brand={car.brand} km={car.km} color={car.color} />
      ))}
      {/*Fragments*/}
      <Fragments />
      {/*Children*/}
      <Container>
        <p>Esse é o parágrafo</p>
      </Container>
      {/*Executar Função*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*State Lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
