"use client";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen" id="contact">
      
      <ContactHero />
      
      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            {/* Contact Info - Takes up 1 column */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for the perfect moment. Your journey to a better life starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 rounded-full text-lg font-semibold">
              Schedule Free Consultation
            </button>
            <button className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold">
              Learn About My Process
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
