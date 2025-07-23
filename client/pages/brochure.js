
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BrochureSection from '../components/BrochureSection';

export default function Brochure() {
  return (
    <>

      <Head>
        <title>Brochure - JMC</title>
        <meta name="description" content="Téléchargez notre brochure" />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Notre brochure</h1>

        <BrochureSection />
      </main>
      <Footer />
    </>
  );
}
