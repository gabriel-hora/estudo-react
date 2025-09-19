const UserDetails = (user) => {
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.profession}</li>
      </ul>
      {user.age < 18 ? (
        <h3>O {user.name} não pode dirigir</h3>
      ) : (
        <h3>O {user.name} pode dirigir</h3>
      )}
    </div>
  );
};

export default UserDetails;
