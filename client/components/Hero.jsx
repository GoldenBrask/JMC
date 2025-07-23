export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center">
      <img src="/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 space-y-4 p-4">
        <h1 className="text-4xl md:text-6xl font-bold">JMC Aix-Marseille</h1>
        <p className="text-xl">Services Web, Mobile et Data</p>
        <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 rounded text-white">Demander un devis</a>
      </div>
    </section>
  );
}
