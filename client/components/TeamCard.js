export default function TeamCard({ member }) {
  return (
    <div className="group text-center p-4">
      <img
        src={member.photo}
        alt=""
        className="mx-auto w-32 h-32 rounded-full object-cover"
      />
      <h3 className="mt-4 font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.role}</p>
      <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition">
        {member.bio}
      </p>
    </div>
  );
}
