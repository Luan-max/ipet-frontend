import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg";

export default function Header() {
  return (
    <header className="w-full h-24  flex items-center justify-between shadow-md bg-gradient-to-r from-blue-500 to-cyan-500 z-10">
      <div className="flex flex-row pl-28  items-center gap-1 justify-center">
        <Image src={logo} width={50} height={50} alt="Logo" />
        <span className="text-white font-bold text-2xl">IPet</span>
      </div>

      <div className="flex flex-row pr-28 gap-8 items-center justify-center">
        <Link href="#" className="text-white font-bold text-md">
          Planos e Preços
        </Link>
        <Link href="#" className="text-white font-bold text-md">
          Fale conosco
        </Link>
        <button className="bg-transparent w-36 h-10 rounded-md outline outline-offset-2 outline-2 outline-white hover:bg-white text-white hover:text-primary-0">
          {" "}
          <span className="text-sm font-bold">Fazer login</span>
        </button>
      </div>
    </header>
  );
}
