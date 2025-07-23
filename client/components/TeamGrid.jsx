import TeamCard from './TeamCard';

export default function TeamGrid({ members }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {members.map((m) => (
        <TeamCard key={m.name} member={m} />
      ))}
    </div>
  );
}
