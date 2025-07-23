
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SectionCard from '../components/SectionCard';
import { services } from '../data/mock';


export default function Home() {
  return (
    <>

      <Head>
        <title>JMC Aix-Marseille</title>
        <meta name="description" content="Services web, mobile et data" />
      </Head>
      <Header />
      <main>
        <Hero />
        <section className="container mx-auto p-6 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <SectionCard key={s.title} service={s} />
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
