export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Get In Touch
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Ready to start your transformation journey? I&apos;m here to help you unlock your potential 
          and create the life you&apos;ve always dreamed of.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
          <div className="flex items-center">
            <span className="mr-3 text-2xl">📧</span>
            <span>sarah@lifecoach.com</span>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-2xl">📞</span>
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-2xl">📍</span>
            <span>New York, NY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
