import React from "react";
import { useState } from "react";

const ListRender = () => {

  const [users, setUsers] = useState([
    { id: 1, name: "Gabriel", age: 28 },
    { id: 2, name: "Agatha", age: 33 },
    { id: 3, name: "Ravi", age: 2 },
    { id: 4, name: "João", age: 50 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {users.map((item, id) => (
          <li key={id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Nome aleatório</button>
    </div>
  );
};

export default ListRender;
