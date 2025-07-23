export default function ValueCard({ value }) {
  return (
    <div className="value-card">
      <img src={value.icon} alt="" />
      <h3>{value.title}</h3>
      <p>{value.text}</p>
    </div>
  );
}
