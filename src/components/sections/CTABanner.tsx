export default function CTABanner() {
  return (
    <section id="cta" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Take the first step toward the life you&apos;ve always wanted. Book your free consultation today.
        </p>
        <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105">
          Book Your Free Session Today
        </button>
      </div>
    </section>
  );
}
