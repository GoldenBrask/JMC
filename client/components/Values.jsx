import { values } from '../data/mock';

export default function Values() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Nos valeurs</h2>
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-4 px-6">
        {values.map((v) => (
          <div key={v.key} className="flex flex-col items-center">
            <img src={v.icon} alt="" className="h-12 mb-4" />
            <h4 className="text-lg font-medium mb-2">{v.title}</h4>
            <p className="text-gray-600 text-center">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
