export default function SectionCard({ service }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden flex flex-col">
      <img src={service.image} alt="" className="h-40 w-full object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold mb-2">{service.title}</h3>
        <p className="text-sm text-gray-600 flex-1">{service.text}</p>
        <a href={`/services/${service.category}`} className="mt-4 text-blue-600 hover:underline">En savoir plus</a>
      </div>
    </div>
  );
}
