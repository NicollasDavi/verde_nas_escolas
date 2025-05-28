import { notFound } from "next/navigation";

const projetos: Record<
  string,
  {
    titulo: string;
    escola: string;
    imagem: string;
    video: string;
    descricao: string;
    importancia: string;
    impacto: string;
  }
> = {
  "reciclagem-na-escola": {
    titulo: "Reciclagem na Escola",
    escola: "Escola Florescer",
    imagem:
      "https://www.uninter.com/noticias/wp-content/uploads/2022/03/noticias_5-dicas-de-como-separar-o-lixo-na-escola-e-conscientizar-os-alunos.png",
    video: "https://www.youtube.com/watch?v=TYaVeo75Myc",
    descricao: `Este projeto ensina os alunos a separar o lixo corretamente com coletores coloridos.
    
1. Crie lixeiras com cores para papel, plástico, vidro e metal.
2. Ensine os alunos em sala sobre a importância da reciclagem.
3. Realize oficinas para transformar lixo reciclável em arte.`,
    importancia: `A reciclagem na escola promove a conscientização ambiental desde cedo, incentivando hábitos sustentáveis e reduzindo o impacto ambiental.`,
    impacto: `Redução de 40% nos resíduos enviados ao aterro e maior engajamento dos alunos com questões ambientais.`,
  },

  "horta-escolar": {
    titulo: "Horta Escolar",
    escola: "Colégio Verde Vida",
    imagem:
      "https://www.escoladainteligencia.com.br/wp-content/uploads/2019/11/291122-conheca-5-razoes-para-criar-uma-horta-na-escola.jpg",
    video: "https://www.youtube.com/watch?v=FtMSuZYXidk",
    descricao: `Criamos uma horta na escola com a participação dos alunos, promovendo o contato com o cultivo de alimentos saudáveis.
    
1. Escolha um local com sol e água por perto.
2. Divida canteiros e escolha hortaliças fáceis de plantar.
3. Alunos cuidam da horta em grupos rotativos.`,
    importancia: `Ensina práticas sustentáveis, alimentação saudável e responsabilidade ambiental.`,
    impacto: `Melhoria na alimentação escolar e maior consciência ecológica nos estudantes e familiares.`,
  },

  "reducao-de-lixo-plastico": {
    titulo: "Redução de Lixo Plástico",
    escola: "Instituto Eco Jovem",
    imagem:
      "https://www.correiosc.com.br/wp-content/uploads/2021/07/Projeto_Horta-4-min.jpg",
    video: "https://www.youtube.com/watch?v=nvGGogHinOI",
    descricao: `Campanha de conscientização para reduzir o uso de plásticos descartáveis no ambiente escolar.
    
1. Oficinas para produzir ecobags e canudos reutilizáveis.
2. Parcerias com cantinas para eliminar copos plásticos.
3. Desafios semanais de "escola sem plástico".`,
    importancia: `Conscientiza sobre o impacto do plástico nos oceanos e estimula alternativas sustentáveis.`,
    impacto: `Redução de 70% nos resíduos plásticos gerados em 3 meses de projeto.`,
  },

  "compostagem-domestica": {
    titulo: "Compostagem Doméstica",
    escola: "Escola Natureza Viva",
    imagem:
      "https://cdn.pixabay.com/photo/2020/07/06/08/40/compost-5376658_1280.jpg",
    video: "https://www.youtube.com/watch?v=lR0si0SF334",
    descricao: `Montamos composteiras em casa com baldes plásticos reutilizados, ensinando os alunos a transformar restos orgânicos em adubo.
    
1. Fure baldes e intercale restos de comida com folhas secas.
2. Mexa a mistura a cada 2 dias.
3. Em 30 dias, use o adubo nas plantas da escola.`,
    importancia: `Reduz o descarte de resíduos orgânicos e ensina ciclos naturais de decomposição.`,
    impacto: `Diminuição de 50% nos resíduos orgânicos e uso do composto na horta da escola.`,
  },
};

function getYoutubeEmbedUrl(url: string) {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url; // caso a URL seja inválida, retorna ela mesma
  }
}

export default function ProjetoPage({ params }: { params: { slug: string } }) {
  const projeto = projetos[params.slug];
  if (!projeto) return notFound();

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
