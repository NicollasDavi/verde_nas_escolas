import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" passHref legacyBehavior>
          <button
            type="button"
            className="text-2xl font-bold text-green-800 cursor-pointer hover:text-green-900 transition"
            aria-label="Voltar para página inicial"
          >
            EcoProjetos
          </button>
        </Link>

        <nav>
          <ul className="flex space-x-8 text-green-700 font-semibold">
            <li>
              <Link href="/adicionar-projeto" passHref legacyBehavior>
                <button
                  type="button"
                  className="hover:text-green-900 transition cursor-pointer"
                >
                  Adicionar Projeto
                </button>
              </Link>
            </li>
            <li>
              <Link href="/quem-somos" passHref legacyBehavior>
                <button
                  type="button"
                  className="hover:text-green-900 transition cursor-pointer"
                >
                  Quem Somos
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
