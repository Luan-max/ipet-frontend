import Link from "next/link";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-4 h-60">
      <div className="flex flex-row justify-around">
        <div className="p-6 grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-white font-bold mb-2 ">IPet</h3>
            <ul className="text-gray-200 flex flex-col ">
              <Link href="">Sobre nós </Link>
              <Link href="">Equipe</Link>
              <Link href="">Termos de uso</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 ">
            <h3 className="text-white font-bold mb-2 ">Ajuda</h3>
            <ul className="text-gray-200 flex flex-col ">
              <Link href="">Suporte</Link>
              <Link href="">Contato</Link>
              <Link href="">Perguntas</Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col p-6 ">
          <h3 className="text-white font-bold mb-2 ">Redes sociais</h3>
          <div className="flex flex-row gap-2">
            <FacebookLogo size={32} color="white" cursor="pointer" />
            <InstagramLogo size={32} color="white" cursor="pointer" />
            <WhatsappLogo size={32} color="white" cursor="pointer" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-xs font-bold text-gray-200 mt-5">
          © 2023 -Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
