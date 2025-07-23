import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <h1>Contact</h1>
        <form>
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Envoyer</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
