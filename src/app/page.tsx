"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import Header from "@/components/header";

import {
  ChartLineUp,
  Clock,
  CloudArrowUp,
  Money,
  PaperPlaneRight,
  PaperPlaneTilt,
  PhoneCall,
  Table,
  UserList,
} from "phosphor-react";
import { Communication, Online, Prontu, Calendar } from "@/components/icons";
import Footer from "@/components/footer";
import Image from "next/image";

import dash from "../../public/assets/dashboard.png";
import form from "../../public/assets/form.jpg";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Header />
      <section className="w-full h-screen bg-background bg-cover">
        <div className="w-full h-full flex flex-col p-16 gap-6 items-start justify-center">
          <h1 className="text-primary-0 text-2xl font-bold">
            Software médico iPet
          </h1>
          <h2 className="text-gray text-5xl">
            Faça a gestão da sua clínica de <br />
            forma otimizada e fácil
          </h2>
          <Button label="Quero conhecer" />
          <div className="flex flex-row gap-2 items-center cursor-pointer">
            <PhoneCall size={32} color="#0ea5e9" />
            <span  className="text-primary-0 text-sm font-bold ">
              Fale conosco
            </span>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col items-center justify-center pt-12 gap-2">
          <h1 className="text-primary-0 text-5xl font-bold">Funcionalidades</h1>
          <span className="text-secondary-0 text-lg font-bold">
            Passe o mouse sobre os cards e conheça nossas funcionalidades
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-12 gap-4 p-4">
          <Card
            className="bg-gradient-to-r from-blue-500 to-cyan-500"
            title="Casdatro de paciente"
            image={Online}
          />
          <Card
            className="bg-gradient-to-r from-blue-500 to-cyan-500"
            title="Gerenciamento de consultas"
            image={Calendar}
          />
          <Card
            className="bg-gradient-to-r from-blue-500 to-cyan-500"
            title="Gestão de prontuário"
            image={Prontu}
          />
          <Card
            className="bg-gradient-to-r from-blue-500 to-cyan-500"
            title="Comunicação com paciente"
            image={Communication}
          />
        </div>
      </section>
      <hr className="w-full mt-12 bg-slate-300" />

      <section className="w-full p-10">
        <div className="flex flex-col items-center justify-center pt-12 gap-2 p-4">
          <h1 className="text-primary-0 text-5xl font-bold">Benefícios</h1>
          <span className="text-secondary-0 text-lg font-bold">
            Ganhe ainda mais praticidade na gestão da sua clínica
          </span>
        </div>
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-row justify-center items-center">
            <Image
              src={dash}
              width={800}
              height={150}
              alt="Dashboard"
              className="shadow-inner hover:shadow-lg rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center mt-10 p-4">
            <div className="flex flex-col gap-7 items-start justify-center">
              <span className="text-4xl font-medium text-gray-600">
                {" "}
                Otimize os processos do dia a dia da clínica
              </span>
              <div className="mt-5 flex flex-row gap-4 justify-center items-center ">
                <Clock size={25} color="#0ea5e9" weight="bold" />

                <span className="text-sm font-bold text-gray-700 ">
                  Tenha mais tempo para você e seus pacientes
                </span>
              </div>
              <hr className="w-full" />
              <div className="flex flex-row gap-4 justify-center items-center ">
                <Money size={25} color="#0ea5e9" weight="bold" />
                <span className="text-sm font-bold text-gray-700">
                  Visualize todas as suas finanças em único lugar
                </span>
              </div>
              <hr className="w-full" />
              <div className="flex flex-row gap-4 justify-center items-center  ">
                <ChartLineUp size={25} color="#0ea5e9" weight="bold" />

                <span className="text-sm font-bold text-gray-700">
                  Obtenha relatórios e gráficos automáticos da clínica
                </span>
              </div>
              <hr className="w-full" />
              <div className="flex flex-row gap-4 justify-center items-center ">
                <CloudArrowUp size={25} color="#0ea5e9" weight="bold" />
                <span className="text-sm font-bold text-gray-700">
                  Acesse seus dados de qualquer lugar
                </span>
              </div>
              <hr className="w-full" />
              <Button label="Quero testar conhecimento" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around items-center">
          <div className="flex justify-center items-center mt-10 p-4 gap-4">
            <div className="flex flex-col gap-7 items-start justify-center">
              <span className="text-4xl font-medium text-gray-600">
                {" "}
                Ofereça um atendimento totalmente personalizado
              </span>
              <div className="mt-5 flex flex-row gap-4 justify-center items-center ">
                <Table size={25} color="#0ea5e9" weight="bold" />

                <span className="text-sm font-bold text-gray-700 ">
                  Customize o prontuário de acordo com sua prática
                </span>
              </div>
              <hr className="w-full" />
              <div className="flex flex-row gap-4 justify-center items-center ">
                <UserList size={25} color="#0ea5e9" weight="bold" />
                <span className="text-sm font-bold text-gray-700">
                  Customize o prontuário de acordo com sua prática
                </span>
              </div>
              <hr className="w-full" />
              <div className="flex flex-row gap-4 justify-center items-center  ">
                <PaperPlaneTilt size={25} color="#0ea5e9" weight="bold" />

                <span className="text-sm font-bold text-gray-700">
                  Envie comunicações personalizadas para os pacientes
                </span>
              </div>
              <hr className="w-full" />
              <Button label="Quero testar conhecimento" />
            </div>
            <div className="flex flex-row justify-center items-center">
              <Image
                src={form}
                width={800}
                height={150}
                alt="Dashboard"
                className="shadow-inner hover:shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
