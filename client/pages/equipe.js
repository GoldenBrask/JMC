
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamGrid from '../components/TeamGrid';
import { team } from '../data/mock';

export default function Equipe() {
  return (
    <>
      <Head>
        <title>Notre équipe - JMC</title>
        <meta name="description" content="Découvrez notre équipe" />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Notre équipe</h1>
        <TeamGrid members={team} />
  
      </main>
      <Footer />
    </>
  );
}
