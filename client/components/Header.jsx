export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="font-bold text-xl">JMC Aix-Marseille</a>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline">Accueil</a>
          <a href="/services/web" className="hover:underline">Services</a>
          <a href="/portfolio" className="hover:underline">Portfolio</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/equipe" className="hover:underline">Équipe</a>
          <a href="/valeurs" className="hover:underline">Valeurs</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <a
          href="/contact"
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hidden md:inline-block"
        >
          Devis
        </a>
      </div>
    </header>
  );
}
