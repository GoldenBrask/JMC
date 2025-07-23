import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ServicePage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Header />
      <main>
        <h1>Service {category}</h1>
      </main>
      <Footer />
    </>
  );
}
