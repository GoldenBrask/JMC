import { services } from '../data/mock';

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-12">Nos services</h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 px-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <img src={s.icon} alt="" className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">{s.title}</h3>
            <p className="text-gray-600 mb-4">{s.desc}</p>
            <a
              href={`/services/${s.id}`}
              className="text-blue-900 font-semibold hover:underline"
            >
              En savoir plus
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
