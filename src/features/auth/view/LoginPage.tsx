import { useState } from "react";
import { useLoginViewModel } from "../viewModel/loginViewModel";

export const LoginPage = () => {
  const { handleLogin, loading, error } = useLoginViewModel();
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("123456");

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin({ email, password });
        }}
      >
        <label className="block mb-2">Email</label>
        <input
          className="w-full p-2 rounded bg-gray-700 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block mb-2">Password</label>
        <input
          type="password"
          className="w-full p-2 rounded bg-gray-700 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-600 px-4 py-2 rounded" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
        {error && <p className="text-red-400 mt-3">{error}</p>}
      </form>
    </div>
  );
};
