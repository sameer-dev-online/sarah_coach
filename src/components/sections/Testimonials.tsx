export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Marketing Executive",
      initials: "MR",
      gradient: "from-pink-400 to-red-400",
      testimonial: "Sarah helped me gain the confidence to pursue my dream career. Her guidance was invaluable in helping me navigate a major career transition successfully."
    },
    {
      name: "David Thompson",
      role: "Entrepreneur",
      initials: "DT",
      gradient: "from-blue-400 to-indigo-400",
      testimonial: "Working with Sarah transformed my mindset completely. I now approach challenges with confidence and have achieved goals I never thought possible."
    },
    {
      name: "Jennifer Lee",
      role: "Creative Director",
      initials: "JL",
      gradient: "from-green-400 to-teal-400",
      testimonial: "Sarah's coaching gave me the clarity I needed to make important life decisions. Her support and insights were exactly what I needed to move forward."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">What Clients Say</h2>
          <p className="text-xl text-gray-600">Real stories from people who transformed their lives</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;{testimonial.testimonial}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
