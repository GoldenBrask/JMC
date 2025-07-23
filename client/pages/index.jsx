import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Values from '../components/Values';
import PortfolioPreview from '../components/PortfolioPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>JMC Aix‑Marseille – Junior‑Entreprise Web, Mobile & Data</title>
        <meta
          name="description"
          content="Junior‑Entreprise spécialisée en développement Web, mobile et projets data."
        />
      </Head>
      <Header />
      <Hero />
      <Services />
      <Values />
      <PortfolioPreview />
      <Footer />
    </>
  );
}
