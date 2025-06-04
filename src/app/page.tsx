"use client";
import React, { useState } from "react";
import Link from "next/link";
import ChatModal from "./components/chatModal";

const projetos = [
  {
    slug: "reciclagem-na-escola",
    titulo: "Reciclagem na Escola",
    escola: "Escola Florescer",
    resumo: "Implementamos um sistema de coleta seletiva com alunos.",
    imagem:
      "https://www.uninter.com/noticias/wp-content/uploads/2022/03/noticias_5-dicas-de-como-separar-o-lixo-na-escola-e-conscientizar-os-alunos.png",
  },
  {
    slug: "horta-escolar",
    titulo: "Horta Comunitária Escolar",
    escola: "E.M. Santa Rita",
    resumo: "Nossa horta ensina aos alunos sobre cultivo de alimentos.",
    imagem:
      "https://www.escoladainteligencia.com.br/wp-content/uploads/2019/11/291122-conheca-5-razoes-para-criar-uma-horta-na-escola.jpg",
  },
  {
    slug: "reducao-de-lixo-plastico",
    titulo: "Reduzindo o Lixo Plástico",
    escola: "C.E. Vila Verde",
    resumo: "Campanhas para diminuir o uso de plástico com oficinas.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWwuHVRMrhrX--hCKItAplwiaHCN7lsFBBw&s",
  },
  {
    slug: "compostagem-domestica",
    titulo: "Projeto de Compostagem",
    escola: "Escola União",
    resumo: "Ensinamos os alunos a compostar resíduos orgânicos.",
    imagem:
      "https://www.correiosc.com.br/wp-content/uploads/2021/07/Projeto_Horta-4-min.jpg",
  },
];

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <main className="bg-[#fefcf6] min-h-screen font-sans text-gray-800">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-snug tracking-tight">
            Projetos Ambientais
            <br className="hidden md:inline" /> em Escolas Públicas
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Compartilhando ideias e iniciativas sustentáveis — da reciclagem às
            hortas comunitárias.
          </p>
        </section>

        {/* Lista de Projetos */}
        <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <Link key={projeto.slug} href={`/projetos/${projeto.slug}`}>
              <article className="flex flex-col rounded-lg border border-gray-300 hover:border-green-600 shadow-sm hover:shadow-lg transition duration-300 cursor-pointer overflow-hidden bg-white">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-green-900 mb-1">
                    {projeto.titulo}
                  </h2>
                  <p className="text-sm font-medium text-green-700 mb-3">
                    {projeto.escola}
                  </p>
                  <p className="text-gray-700 text-sm flex-grow">{projeto.resumo}</p>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>

      {/* Botão flutuante para abrir o chat */}
      <button
        onClick={() => setIsChatOpen(true)}
        aria-label="Abrir chat"
        className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors duration-200"
      >
        💬
      </button>

      {/* Modal do Chat */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
