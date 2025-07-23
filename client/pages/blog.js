import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <>

      <Head>
        <title>Blog - JMC</title>
        <meta name="description" content="Actualités et articles" />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Blog</h1>
      </main>
      <Footer />
    </>
  );
}
