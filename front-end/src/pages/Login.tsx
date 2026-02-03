import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="./logo.png" alt="" className="mb-4" />
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm text-white">
          Login
        </button>

        <Link
          to="/register"
          className="block w-full rounded-md bg-[#C92A0E] py-2 text-center text-sm text-white"
        >
          Registrar-se
        </Link>
      </div>
    </form>
  );
};

export default Login;
