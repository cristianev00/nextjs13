import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiHome } from "react-icons/fi";
const AccessDenied = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
        <Image
          src="/logo_mmaya_white.png"
          width={500}
          height={200}
          alt="Access Denied"
        />
        <h1 className="text-4xl font-bold text-white">Acceso Restringido</h1>
        <p className="mt-4 text-lg text-slate-200">No tienes permisos para acceder a esta página</p>
        <Link href="/" className="text-slate-200 hover:text-yellow-300 overflow-hidden text-lg">
              <div className="flex items-center">
                <FiHome className="mr-2 text-[#34BFA3]" />
                <span className="whitespace-normal">Ir a Login</span>
              </div>
            </Link>
      </div>
    );
  };
  
  export default AccessDenied;
  