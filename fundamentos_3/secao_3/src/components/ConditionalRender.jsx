import { useState } from "react";

function ConditionalRender() {
  const [x] = useState(false);
  const [name] = useState("João");

  return (
    <div>
      <h1>Isso será Exibido</h1>
      {x && <p>Se x for true, sim</p>}

      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não é João</p>
        </div>
      )}
    </div>
  );
}

export default ConditionalRender;
