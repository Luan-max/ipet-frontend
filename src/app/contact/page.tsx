"use client";

import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";

import Mailjet from "node-mailjet";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const mailjet = Mailjet.apiConnect(
      process.env.API_KEY,
      process.env.SECRET_KEY
    );

    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "pilot@mailjet.com",
            Name: "Mailjet Pilot",
          },
          To: [
            {
              Email: "passenger1@mailjet.com",
              Name: "passenger 1",
            },
          ],
          Subject: "Your email flight plan!",
          TextPart:
            "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
          HTMLPart:
            '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
        },
      ],
    });

    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err.statusCode);
      });
  };

  return (
    <main className="w-full h-screen flex flex-col ">
      <Header />
      <section className="mt-20 h-screen flex items-center justify-center ">
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
                value={name}
                onChange={(event) => setName(event.target.value)}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 transform hover:scale-110 transition duration-500 ease-in-out w-60 h-12 rounded-lg flex items-center justify-center"
              >
                <span className="text-white text-sm font-bold">Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
