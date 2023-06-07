"use client";

import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Contact() {
  return (
    <main className="w-full h-full flex flex-col ">
      <Header />
      <section className="h-screen flex items-center justify-center ">
        <div className="w-96 h-[32rem] bg-white rounded p-8 shadow-md my-16 ">
          <h2 className="text-2xl mb-4 font-bold justify-items-center">
            Contato
          </h2>
          <form className="">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nome:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-400"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-400"
                placeholder="Digite seu email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mensagem:
              </label>
              <textarea
                id="message"
                className="w-full px-4 h-32 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-400"
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Button label="Enviar" path="#" />
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
