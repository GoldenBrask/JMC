import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ValueCard from '../components/ValueCard';
import { values } from '../data/mock';

export default function Valeurs() {
  return (
    <>
      <Head>
        <title>Nos valeurs - JMC</title>
        <meta name="description" content="Les valeurs qui nous guident" />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Nos valeurs</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {values.map((v) => (
            <ValueCard key={v.title} value={v} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
