import { projects } from '../data/mock';

export default function PortfolioPreview() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Quelques-unes de nos réalisations
      </h2>
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3 px-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={p.img}
              alt="Projet"
              className="object-cover w-full h-56 group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-semibold">Voir le projet</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/portfolio"
          className="mt-8 inline-block px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
        >
          Voir tout le portfolio
        </a>
      </div>
    </section>
  );
}
