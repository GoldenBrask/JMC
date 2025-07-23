export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-4 px-4 text-sm">
        <ul className="space-y-2">
          <li><a href="/" className="hover:underline">Accueil</a></li>
          <li><a href="/services/web" className="hover:underline">Services</a></li>
          <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="/blog" className="hover:underline">Blog</a></li>
          <li><a href="/equipe" className="hover:underline">Équipe</a></li>
          <li><a href="/valeurs" className="hover:underline">Valeurs</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
        <div className="flex items-center space-x-4 md:justify-center">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
        <p className="md:text-right">&copy; {new Date().getFullYear()} JMC Aix-Marseille</p>
      </div>
    </footer>
  );
}
