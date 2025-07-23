export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 px-6">
        <div>
          <h3 className="font-semibold mb-2">JMC Aix‑Marseille</h3>
          <p>
            Junior‑Entreprise spécialisée en développement Web, mobile et
            projets data.
          </p>
        </div>
        <ul className="space-y-2">
          <li>
            <a href="/" className="hover:underline">
              Accueil
            </a>
          </li>
          <li>
            <a href="/services/web" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="/portfolio" className="hover:underline">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="/equipe" className="hover:underline">
              Équipe
            </a>
          </li>
          <li>
            <a href="/valeurs" className="hover:underline">
              Valeurs
            </a>
          </li>
          <li>
            <a href="/brochure" className="hover:underline">
              Brochure
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <p className="mb-2">contact@jmc-aix.fr</p>
          <p>+33 4 00 00 00 00</p>
        </div>
      </div>
      <p className="text-center text-sm mt-6">© 2025 JMC Aix‑Marseille</p>
    </footer>
  );
}
