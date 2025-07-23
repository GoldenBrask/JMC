export default function Hero() {
  return (
    <section
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold">Bienvenue chez JMC Aix‑Marseille</h1>
        <p className="text-lg md:text-xl mt-4 mb-8">
          Votre Junior‑Entreprise spécialisée en Web, Mobile & Data
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-orange-500 rounded-lg font-medium hover:bg-orange-600 transition"
        >
          Demander un devis
        </a>
      </div>
    </section>
  );
}
