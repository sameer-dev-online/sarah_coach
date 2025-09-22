import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: "f", bgColor: "bg-blue-600" },
    { name: "Twitter", icon: "t", bgColor: "bg-blue-400" },
    { name: "LinkedIn", icon: "in", bgColor: "bg-blue-700" },
    { name: "Instagram", icon: "ig", bgColor: "bg-pink-600" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sarah Johnson</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional Life Coach dedicated to helping you unlock your potential
              and create the life you deserve.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <div key={index} className={`w-10 h-10 ${social.bgColor} rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}>
                  <span className="text-white text-sm font-bold">{social.icon}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:sarah@lifecoach.com" className="hover:text-white transition-colors">
                  sarah@lifecoach.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                New York, NY
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sarah Johnson Life Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
