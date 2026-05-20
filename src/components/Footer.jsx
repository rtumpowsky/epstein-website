import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-5 text-white underline decoration-2 underline-offset-4 decoration-[#8E5B68]">
              Dr. Michelle A. Epstein, PhD
            </h3>
            <p className="text-gray-200 text-lg mb-3 font-semibold">Licensed Clinical Psychologist</p>
            <p className="text-gray-200 text-lg font-semibold">Board Certified Executive & Leadership Coach</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-5 uppercase tracking-wider text-white underline decoration-2 underline-offset-4 decoration-[#8E5B68]">
              Contact
            </h4>
            <div className="space-y-3 text-gray-200 text-lg font-semibold">
              <p className="hover:text-white transition-colors">drmichelleepstein@gmail.com</p>
              <p className="hover:text-white transition-colors">847-702-8777</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-5 uppercase tracking-wider text-white underline decoration-2 underline-offset-4 decoration-[#8E5B68]">
              Services
            </h4>
            <div className="space-y-3 text-gray-200 text-lg font-semibold">
              <p>Clinical Therapy</p>
              <p>Executive Coaching</p>
              <p>Telehealth in 43+ States</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-700 pt-10 text-center">
          <p className="text-gray-200 text-base font-semibold">
            &copy; 2026 Dr. Michelle A. Epstein.
          </p>
        </div>
      </div>
    </footer>
  );
}
