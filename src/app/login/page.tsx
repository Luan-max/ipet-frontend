"use client";
import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Lógica de login aqui
  };

  const handleForgotPassword = () => {
    // Lógica de recuperação de senha aqui
  };

  const handleGoogleLogin = () => {
    // Lógica de login com Google aqui
  };

  const handleRegister = () => {
    // Lógica de registro aqui
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email ou Nome de Usuário
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block font-medium mb-1">
            Senha
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >

          </button>
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4 w-full"
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-blue-500 text-sm hover:underline mb-4 w-full text-center"
        >
          Esqueci minha senha
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
        >
          Entrar com Google
        </button>
        <p className="text-center mt-4">
          Você ainda não tem uma conta iPet?{' '}
          <button
            type="button"
            onClick={handleRegister}
            className="text-blue-500 text-sm hover:underline"
          >
            Registre-se agora
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
