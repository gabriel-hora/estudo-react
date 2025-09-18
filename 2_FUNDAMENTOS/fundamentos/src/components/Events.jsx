const Events = () => {
  const handleMyEvent = (e) => {
    console.log("Ativou o evento");
    console.log(e);
  };

  // Renderizar componentes com base na condição
  const renderFunctionConditional = (x) => {
    if (x) {
        return <div>TRUE X</div>
    } else {
        return <div>FALSE Y</div>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
      </div>
      <div>
        {/*Exemplo De como fazer de forma implícita*/}
        <button onClick={() => console.log("Clicou")}>
          Clique aqui também!
        </button>
      </div>
      {renderFunctionConditional(true)}
    </div>
  );
};

export default Events;
