export default function ContactInfo() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "Send me a message anytime",
      contact: "sarah@lifecoach.com",
      href: "mailto:sarah@lifecoach.com"
    },
    {
      icon: "📞",
      title: "Phone",
      description: "Call for immediate assistance",
      contact: "(555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      description: "Based in New York City",
      contact: "New York, NY",
      href: "#"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-white rounded-2xl card-shadow p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xl">{method.icon}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">{method.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <a 
                  href={method.href}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {method.contact}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-white rounded-2xl card-shadow p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>
        <div className="space-y-3">
          {officeHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="font-medium text-gray-700">{schedule.day}</span>
              <span className="text-gray-600">{schedule.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>Note:</strong> Emergency consultations available outside regular hours. 
            Please call or email for urgent matters.
          </p>
        </div>
      </div>

      {/* Quick Response Promise */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Quick Response Guarantee</h3>
          <p className="opacity-90">
            I typically respond to all inquiries within 24 hours. 
            For urgent matters, please call directly.
          </p>
        </div>
      </div>
    </div>
  );
}
