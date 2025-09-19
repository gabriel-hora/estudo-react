import { useState } from "react";
import "./MyForm.css";

const MyForms = ({ user }) => {
  // Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "");
  // Verifica se chegou o input
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    // Serve para o formulario não ser enviado sem nada
    event.preventDefault();
    console.log("Enviado o formulário");
    // dentro desse trecho faço todas as verificações antes de enviar
    console.log(name, email, bio, role);

    //Após o termino, limpa o formulário
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/*htmlFor do laber e name do input precisa ser iguais */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <input type="submit" value="Enviar" />

        {/*Label envolvendo INPUT*/}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />

        {/*TextArea*/}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <input type="submit" value="Enviar" />

        {/*Select*/}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default MyForms;
