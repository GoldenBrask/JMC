import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ServicePage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{category} - JMC</title>
        <meta name="description" content={`Service ${category}`} />
      </Head>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Service {category}</h1>
      </main>
      <Footer />
    </>
  );
}
