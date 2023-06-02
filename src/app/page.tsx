"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import Header from "@/components/header";
import { PhoneCall } from "phosphor-react";

export default function Home() {
  return (
    <main className="w-full h-screen bg-white">
      <Header />
      <section className="w-full h-102 bg-background bg-no-repeat bg-cover">
        <div className="w-full h-full flex flex-col p-16 gap-6 items-start justify-center">
          <h1 className="text-primary-0 text-2xl font-bold">
            Software médico iClinic
          </h1>
          <h2 className="text-primary-0 text-5xl">
            Gestão clínica e <br />
            prontuário eletrônico
          </h2>
          <p className="text-black text-2xl">
            Conquiste uma gestão clínica de excelência com um <br />
            software médico feito para você
          </p>
          <Button label="Quero conhecer" />
          <div className="flex flex-row gap-2 items-center">
            <PhoneCall size={32} color="#0ea5e9" />
            <span className="text-primary-0 text-sm font-bold ">
              Fale conosco
            </span>
          </div>
        </div>
      </section>
      <section className="w-full h-102 bg-white ">
        <div className="flex flex-col items-center justify-center pt-12 gap-2">
          <h1 className="text-primary-0 text-5xl font-bold">Funcionalidades</h1>
          <span className="text-secondary-0 text-lg font-bold">
            Passe o mouse sobre os cards e conheça nossas funcionalidades
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-12 gap-4">
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500" title="Casdatro de paciente"/>
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500" title="Gerenciamento de consultas"/>
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500" title="Gestão de prontuário"/>
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500" title="Comunicação com paciente"/>
        </div>
      </section>
    </main>
  );
}
