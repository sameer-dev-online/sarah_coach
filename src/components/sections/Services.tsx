export default function Services() {
  const services = [
    {
      icon: "👥",
      title: "1-on-1 Coaching",
      description: "Personalized coaching sessions tailored to your specific goals and challenges.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: "🎯",
      title: "Career Guidance",
      description: "Navigate career transitions and unlock your professional potential with strategic planning.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: "🧠",
      title: "Mindset Shifts",
      description: "Transform limiting beliefs and develop a growth mindset for lasting change.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: "🏆",
      title: "Goal Setting",
      description: "Create clear, actionable goals and develop strategies to achieve them effectively.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">My Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching services designed to support your personal and professional growth
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl card-shadow hover:transform hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <span className={`${service.iconColor} text-2xl`}>{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
