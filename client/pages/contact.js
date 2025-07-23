import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - JMC</title>
        <meta name="description" content="Contactez-nous pour un devis" />
      </Head>
      <Header />
      <main className="container mx-auto p-6 max-w-xl">
        <h1 className="text-2xl font-bold mb-6">Contact</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Nom" className="w-full border p-2" />
          <input type="email" placeholder="Email" className="w-full border p-2" />
          <textarea placeholder="Message" className="w-full border p-2" />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Envoyer</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
