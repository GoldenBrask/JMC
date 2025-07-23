
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - JMC</title>
        <meta name="description" content="Nos réalisations" />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Notre portfolio</h1>

      </main>
      <Footer />
    </>
  );
}
