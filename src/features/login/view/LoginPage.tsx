import { useState } from "react";
import { useLoginViewModel } from "../viewModel/loginViewModel";
import { Input } from "./Input";
import { Button } from "./Button";
import { ErrorMessage } from "./ErrorMessage";
export const LoginPage = () => {
  const { handleLogin, message, loading } = useLoginViewModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    handleLogin({ email, password });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form
        onSubmit={onSubmit}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80"
      >
        <h1 className="text-white text-xl font-bold mb-4">Login</h1>
        <Input
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
        <ErrorMessage message={message} />
      </form>
    </div>
  );
};
