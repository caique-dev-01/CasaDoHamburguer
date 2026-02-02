import { useState } from "react";
import Input from "../components/Input";

const Register = () => {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ nome, email, password, confirmPassword, cep });

    /*Console log para visualizarmos na tela  */
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="./logo.png" alt="" className="mb-4" />

        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />

        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input /* Entrada */
          placeholder="Confirme sua Senha" /* Espaço reservado */
          type="password"
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          } /* Ao alterar e definir Confirmar Senha e valor de destino */
        />

        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />

        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm text-white">
          Login
        </button>
      </div>
    </form>
  );
};

export default Register;
