import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';

export default function Equipe() {
  const team = [
    { name: 'Alice', role: 'Dev', bio: 'Expert web' },
    { name: 'Bob', role: 'Data Scientist', bio: 'Passionné data' }
  ];
  return (
    <>
      <Header />
      <main>
        <h1>Notre équipe</h1>
        {team.map(member => (
          <TeamCard key={member.name} member={member} />
        ))}
      </main>
      <Footer />
    </>
  );
}
