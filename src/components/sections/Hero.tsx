export default function Hero() {
  return (
    <section id="hero" className="gradient-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your Life<br />
          <span className="text-blue-200">with Coaching</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Helping you gain clarity, confidence, and purpose through personalized guidance and support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary px-8 py-4 rounded-full text-lg font-semibold">
            Book a Free Session
          </button>
          <button className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
