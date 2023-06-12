"use client"
import React from 'react';

import { useState } from 'react';
import { useSession, signIn, signOut, getSession } from "next-auth/react"

import Image from 'next/image';
import { RiLeafFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { push } = useRouter();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { data: session } = useSession()

  
  const handleLogout = () => {
    signOut();
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    const result = await signIn('credentials', { username, password, redirect: false });
    console.log(result)
    if (!result.error) {
      push('/dashboard');
    } else {
      setError(result.error);
    }
  };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-login-bg bg-cover bg-center bg-gradient-to-b from-blue-500 to-purple-500">
        <div className="bg-white p-8 rounded-3xl shadow-md">
          <div className="flex justify-center mb-8">
            <Image src="/logo_mmaya.png" alt="Logo" width={350} height={120} />
          </div>
          <div className='text-center text-lg'>Inicia Sesión en SIARH</div>
          <form className='mt-8' onSubmit={handleSubmit}>
          <div className="mb-4">
          <label htmlFor="username" className="text-black">Usuario</label>
            <input
              type="text"
              id="username" value={username} 
              onChange={handleUsernameChange}
              className="w-full py-2 px-4 rounded bg-gray-100 text-gray-800"
              placeholder="xxxxx@mmaya.gob.bo"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-black">Contraseña</label>
            <input
              type="password"
              id="password" value={password}
              onChange={handlePasswordChange}
              className="w-full py-2 px-4 rounded bg-gray-100 text-gray-800"
              placeholder="***********"
            />
          </div>
          <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg animate-bounce-slow">
              Ingresar
            </button>
            
          </div>
          <div className="flex justify-left mt-8">
            <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full mx-1">
              <i className="fab fa-facebook"></i>
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-1">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
          <div className='text-center text-xs mt-4'>2023-2024 © Ever Coarite | PNXT v.1.0 </div>
        </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  