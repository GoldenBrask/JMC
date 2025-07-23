export default function ValueCard({ value }) {
  return (
    <div className="p-4 text-center bg-white shadow rounded">
      <img src={value.icon} alt="" className="mx-auto h-12 mb-4" />
      <h3 className="font-semibold">{value.title}</h3>
      <p className="text-sm text-gray-600">{value.description}</p>
    </div>
  );
}
