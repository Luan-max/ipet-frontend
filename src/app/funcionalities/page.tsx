"use client";

import Button from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Calendar,
  CalendarCheck,
  ChartLineUp,
  ChatsCircle,
  Check,
  IdentificationCard,
} from "phosphor-react";

export default function Funcionalities() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-gradient-to-r from-slate-100 to-slate-300">
      <Header />
      <section className="w-full h-[45rem] flex flex-row items-center justify-between ">
        <div className="flex flex-col p-16 gap-6 items-start justify-center">
          <h1 className="text-primary-0 text-2xl font-bold">Funcionalidades</h1>
          <h2 className="text-black text-5xl">
            Faça a gestão da sua clínica com <br />
            nossas funcionalidades
          </h2>
        </div>
        <div className="flex p-8 items-center justify-center">
          <div className="flex flex-col bg-white shadow-lg rounded-lg w-[39rem] h-[28rem] mt-10">
            <div className="flex flex-row p-8 justify-between">
              <div className="flex flex-col items-start justify-center">
                <span className="text-black font-bold text-xl">
                  Básico
                </span>
                <span className="text-gray-600 font-semibold text-xs">
                  Com este plano, você tem direitos as <br /> nossas
                  funcionalidades presente no plano básico
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-black font-bold text-xl">
                  R$ 40,00/Mês
                </span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-center">
              <Button label="Entrar em contato" />
            </div>
            <hr className="w-full" />
            <span className="p-6 text-black font-bold text-lg">
              Funcionalidades
            </span>
            <div className="p-6  grid grid-cols-2 gap-2">
              <div className="flex flex-row gap-2">
                <Check size={25} color="#42d15a" weight="bold" />
                <span>Agenda Médica</span>
              </div>
              <div className="flex flex-row gap-2">
                <Check size={25} color="#42d15a" weight="bold" />
                <span>Comunicação</span>
              </div>
              <div className="flex flex-row gap-2">
                <Check size={25} color="#42d15a" weight="bold" />
                <span>Prontuário</span>
              </div>
              <div className="flex flex-row gap-2">
                <Check size={25} color="#42d15a" weight="bold" />
                <span>Relatórios</span>
              </div>
              <div className="flex flex-row gap-2">
                <Check size={25} color="#42d15a" weight="bold" />
                <span>Gestão de pacientes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full p-8 flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col p-8">
          <div className="flex items-center justify-center">
            <span className="text-primary-0 font-semibold text-3xl">
              Detalhes das funcionalidades
            </span>
          </div>
          <div className="flex flex-wrap gap-28 p-6 mt-5 items-center justify-center">
            <div className="flex flex-col gap-3 w-60">
              <div className="flex flex-row gap-2 items-center justify-start">
                <CalendarCheck size={25} color="#0ea5e9" weight="bold" />
                <span className="text-gray-700 font-bold text-xl">
                  Agenda médica
                </span>
              </div>
              <span className="text-gray-700 font-bold text-xs">
                Ganhe mais visibilidade dos atendimentos na sua clínica
              </span>
            </div>
            <div className="flex flex-col gap-3 w-72">
              <div className="flex flex-row gap-2 items-center justify-start">
                <Calendar size={25} color="#0ea5e9" weight="bold" />
                <span className="text-gray-700 font-bold text-xl">
                  Agendamento Online
                </span>
              </div>
              <span className="text-gray-700 font-bold text-xs">
                Simplifique as marcações de consultas com uma agenda disponível
                24 horas
              </span>
            </div>
            <div className="flex flex-col gap-3 w-72">
              <div className="flex flex-row gap-2 items-center justify-start">
                <ChatsCircle size={25} color="#0ea5e9" weight="bold" />
                <span className="text-gray-700 font-bold text-xl">
                  Comunicação
                </span>
              </div>
              <span className="text-gray-700 font-bold text-xs">
                Comunique com seus pacientes através de disparos SMS e E-mails
              </span>
            </div>
            <div className="flex flex-col gap-3 w-72">
              <div className="flex flex-row gap-2 items-center justify-start">
                <IdentificationCard size={25} color="#0ea5e9" weight="bold" />
                <span className="text-gray-700 font-bold text-xl">
                  Prontuário
                </span>
              </div>
              <span className="text-gray-700 font-bold text-xs">
                Gerencie seu prontuário de uma forma totalmente dinâmica ao seu
                modelo de negócio
              </span>
            </div>
            <div className="flex flex-col gap-3 w-72">
              <div className="flex flex-row gap-2 items-center justify-start">
                <ChartLineUp size={25} color="#0ea5e9" weight="bold" />
                <span className="text-gray-700 font-bold text-xl">
                  Relatórios
                </span>
              </div>
              <span className="text-gray-700 font-bold text-xs">
                Gere relatórios para medir métricas do seu consultório,
                verificar perfomance e etc
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
