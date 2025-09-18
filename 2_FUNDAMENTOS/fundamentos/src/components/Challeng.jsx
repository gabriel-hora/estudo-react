const Challenge = () => {
  const numberOne = 2;
  const numberTwo = 7;
  var resultado = 0;

  const somaNumeros = (x,y) => {
    resultado = x + y
    console.log(resultado)
  }

  return (<div>
        <div>
            <h1>Desafio 2</h1>
            <h2>O primeiro número é {numberOne}</h2>
            <h2>O segundo número é {numberTwo}</h2>
        </div>
        <div>
            <button name="buttonA"onClick={() => somaNumeros(numberOne, numberTwo)}>Clique para somar os números</button>
        </div>
  </div>
  );
};

export default Challenge;
