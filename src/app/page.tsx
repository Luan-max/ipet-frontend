"use client";

import React from 'react';
import Button from '@/components/button';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { PhoneCall } from 'phosphor-react';

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col bg-white">
      <Header />
      <section className="w-full h-[100%] bg-background bg-no-repeat bg-cover">
        <div className="pt-32 w-full h-full flex flex-col justify-start p-8 gap-6">
          <h1 className="text-blue-700 text-2xl font-bold">
            Software médico iClinic
          </h1>
          <h2 className="text-blue-700 text-5xl">
            Gestão clínica e <br />
            prontuário eletrônico
          </h2>
          <p className="text-black text-2xl">
            Conquiste uma gestão clínica de excelência com um <br />
            software médico feito para você
          </p>
          <Button label="Quero conhecer" />
          <div className="flex flex-row gap-2 items-center">
            <PhoneCall size={32} color="blue" />
            <span className="text-blue-700 text-sm font-bold">Fale conosco</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
