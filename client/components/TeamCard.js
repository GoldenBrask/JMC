export default function TeamCard({ member }) {
  return (
    <div className="team-card">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p>{member.bio}</p>
    </div>
  );
}
