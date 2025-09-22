"use client";

import coach_dp from "../../../public/coach_dp.png"
import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center">
                <Image src={coach_dp.src} alt="Coach DP" width={288} height={288} className="rounded-full" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Meet Sarah Johnson</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 8 years of experience in life coaching, I&apos;m passionate about helping individuals
              unlock their potential and create meaningful change. My approach combines proven coaching
              methodologies with personalized strategies tailored to your unique journey.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-gray-800">Clarity</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-2xl">💪</span>
                </div>
                <h3 className="font-semibold text-gray-800">Confidence</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-gray-800">Growth</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
