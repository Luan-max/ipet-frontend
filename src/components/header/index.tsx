import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";

export default function Header() {
  return (
    <header className="w-full h-24 bg-primary-0 flex items-center justify-between">
      <div className="flex flex-row pl-16 items-center gap-2 justify-center">
        <Image src={logo} width={50} height={50} alt="Logo" />
        <span className="text-white font-bold text-lg">IPet</span>
      </div>

      <div className="flex flex-row p-8 gap-8 items-center justify-center">
        <Link href="#" className="text-white font-bold text-md">
          Planos e Preços
        </Link>
        <Link href="#" className="text-white font-bold text-md">
          Fale conosco
        </Link>
        <button className="bg-transparent w-36 h-10 rounded-md outline outline-offset-2 outline-2 outline-white hover:bg-white text-white hover:text-primary-0">
          {" "}
          <span className="text-sm font-bold">Fazer teste</span>
        </button>
      </div>
    </header>
  );
}
