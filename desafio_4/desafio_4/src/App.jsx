import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const users = [
    { name: "Gabriel", age: 28, profession: "programmer" },
    { name: "Agatha", age: 33, profession: "administrative" },
    { name: "Ravi", age: 2, profession: "study" },
  ];

  return (
    <div>
      {users.map((user) => (
        <UserDetails name={user.name} age={user.age} profession={user.profession}/>
      ))}
    </div>
  );
}

export default App;
