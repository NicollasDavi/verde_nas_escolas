'use client';

import { useParams } from 'next/navigation';
import {useEffect, useState } from 'react';

const projetos: Record<string, {
  titulo: string;
  escola: string;
  imagem: string;
  video: string;
  descricao: string;
  importancia: string;
  impacto: string;
}> = {
  "reciclagem-na-escola": {
    titulo: "Reciclagem na Escola",
    escola: "Escola Florescer",
    imagem:
      "https://www.uninter.com/noticias/wp-content/uploads/2022/03/noticias_5-dicas-de-como-separar-o-lixo-na-escola-e-conscientizar-os-alunos.png",
    video: "https://www.youtube.com/watch?v=TYaVeo75Myc",
    descricao: `Este projeto ensina os alunos a separar o lixo corretamente com coletores coloridos.\n\n1. Crie lixeiras com cores para papel, plástico, vidro e metal.\n2. Ensine os alunos em sala sobre a importância da reciclagem.\n3. Realize oficinas para transformar lixo reciclável em arte.`,
    importancia: `A reciclagem na escola promove a conscientização ambiental desde cedo, incentivando hábitos sustentáveis e reduzindo o impacto ambiental.`,
    impacto: `Redução de 40% nos resíduos enviados ao aterro e maior engajamento dos alunos com questões ambientais.`,
  },
  // Adicione outros projetos aqui
};

function getYoutubeEmbedUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v');
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
}

export default function ProjetoPage() {
  const { slug } = useParams();
  const [notFound, setNotFound] = useState(false);

  if (typeof slug !== 'string') return <p className="text-center text-red-600 mt-10">Slug inválido.</p>;

  const projeto = projetos[slug];

  useEffect(() => {
    if (!projeto) {
      setNotFound(true);
    }
  }, [projeto]);

  if (notFound) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-red-600">Projeto não encontrado</h1>
        <p className="mt-4 text-gray-700">Verifique se o link está correto ou volte à página principal.</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-2">{projeto.titulo}</h1>
      <p className="text-gray-600 mb-6">Realizado por: {projeto.escola}</p>

      <img
        src={projeto.imagem}
        alt={projeto.titulo}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Importância</h2>
        <p className="text-gray-700">{projeto.importancia}</p>
      </section>

      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src={getYoutubeEmbedUrl(projeto.video)}
          title={`Vídeo do projeto ${projeto.titulo}`}
          allowFullScreen
          className="w-full h-[50vh] rounded-lg"
        ></iframe>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Descrição do Projeto</h2>
        <p className="text-gray-700 whitespace-pre-line">{projeto.descricao}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Impacto Esperado</h2>
        <p className="text-gray-700">{projeto.impacto}</p>
      </section>
    </main>
  );
}
