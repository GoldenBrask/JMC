import Header from '../components/Header';
import Footer from '../components/Footer';
import BrochureSection from '../components/BrochureSection';

export default function Brochure() {
  return (
    <>
      <Header />
      <main>
        <h1>Notre brochure</h1>
        <BrochureSection />
      </main>
      <Footer />
    </>
  );
}
