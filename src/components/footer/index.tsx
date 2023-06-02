import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-4 h-60">
      <div className="px-4 grid grid-cols-5 gap-4">
        <div className="col-span-1">
          <h3 className="text-white font-bold mb-2">IPet</h3>
          <ul className="text-gray-200">
            <li>Sobre nós</li>
            <li>Equipe</li>
            <li>Termos de uso</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-white font-bold mb-2">Ajuda</h3>
          <ul className="text-gray-200">
            <li>Suporte</li>
            <li>Contato</li>
            <li>Perguntas frequentes</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-white font-bold mb-2">Redes Sociais</h3>
          <ul className="text-gray-200">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
