export default function BrochureSection() {
  return (
    <section className="text-center space-y-4">
      <iframe
        src="/brochure.pdf"
        className="mx-auto w-full max-w-3xl h-96"
      />
      <a
        href="/brochure.pdf"
        download
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded"
      >
        Télécharger la brochure
      </a>
    </section>
  );
}
