export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Free Consultation",
      description: "We start with a complimentary 30-minute session to understand your goals, challenges, and determine if we're a good fit to work together.",
      bgColor: "bg-blue-500"
    },
    {
      number: "2",
      title: "Personalized Plan",
      description: "Together, we create a customized coaching plan tailored to your specific needs, timeline, and desired outcomes for maximum effectiveness.",
      bgColor: "bg-green-500"
    },
    {
      number: "3",
      title: "Achieve Your Goals",
      description: "Through regular sessions, accountability, and proven strategies, you'll make consistent progress toward your goals and lasting transformation.",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, proven process to help you achieve your goals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white font-bold text-2xl">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
