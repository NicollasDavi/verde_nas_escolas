import Link from "next/link";

const projetos = [
  {
    slug: "reciclagem-na-escola",
    titulo: "Reciclagem na Escola",
    resumo: "Implementamos um sistema de coleta seletiva com alunos.",
    imagem: "https://www.uninter.com/noticias/wp-content/uploads/2022/03/noticias_5-dicas-de-como-separar-o-lixo-na-escola-e-conscientizar-os-alunos.png",
  },
  {
    slug: "horta-escolar",
    titulo: "Horta Comunitária Escolar",
    resumo: "Nossa horta ensina aos alunos sobre cultivo de alimentos.",
    imagem: "https://www.escoladainteligencia.com.br/wp-content/uploads/2019/11/291122-conheca-5-razoes-para-criar-uma-horta-na-escola.jpg",
  },
  {
    slug: "reducao-de-lixo-plastico",
    titulo: "Reduzindo o Lixo Plástico",
    resumo: "Campanhas para diminuir o uso de plástico com oficinas.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWwuHVRMrhrX--hCKItAplwiaHCN7lsFBBw&s",
  },
  {
    slug: "compostagem-domestica",
    titulo: "Projeto de Compostagem",
    resumo: "Ensinamos os alunos a compostar resíduos orgânicos.",
    imagem: "https://www.correiosc.com.br/wp-content/uploads/2021/07/Projeto_Horta-4-min.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-[#fefcf6] min-h-screen font-sans text-gray-800">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-snug tracking-tight">
          Projetos Ambientais<br className="hidden md:inline" /> em Escolas Públicas
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Compartilhando ideias e iniciativas sustentáveis — da reciclagem às hortas comunitárias.
        </p>
        <button className="bg-green-700 hover:bg-green-800 transition-colors duration-200 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-sm hover:shadow-md">
          Quero Compartilhar Meu Projeto
        </button>
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
                <h2 className="text-xl font-bold text-green-900 mb-1">{projeto.titulo}</h2>
                {/* Escola removida */}
                <p className="text-gray-700 text-sm flex-grow">{projeto.resumo}</p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
