import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-1 px-6">
      <div className="container mx-auto">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Ever Coarite | PNXT v.1.0 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
