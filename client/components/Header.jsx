export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-blue-900/90 backdrop-blur h-20">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo-jmc.svg" alt="JMC" className="h-10" />
        </a>
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="/" className="hover:text-orange-400">Accueil</a>
          <a href="/services/web" className="hover:text-orange-400">Services</a>
          <a href="/portfolio" className="hover:text-orange-400">Portfolio</a>
          <a href="/blog" className="hover:text-orange-400">Blog</a>
          <a href="/equipe" className="hover:text-orange-400">Équipe</a>
          <a href="/valeurs" className="hover:text-orange-400">Valeurs</a>
          <a href="/brochure" className="hover:text-orange-400">Brochure</a>
          <a href="/contact" className="hover:text-orange-400">Contact</a>
        </nav>
        <div className="space-x-4 hidden md:flex">
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Brochure
          </a>
          <a
            href="/contact"
            className="px-6 py-2 bg-orange-300 text-white rounded-lg hover:bg-orange-400 transition"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </header>
  );
}
