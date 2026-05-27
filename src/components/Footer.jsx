import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-5 text-white underline decoration-2 underline-offset-4 decoration-[#8E5B68]">
              Dr. Michelle A. Epstein, PhD
            </h3>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-2 md:mb-3 font-semibold">Licensed Clinical Psychologist</p>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg font-semibold">Board Certified Executive & Leadership Coach</p>
          </div>
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-4 md:mb-5 uppercase tracking-wider text-white underline decoration-2 underline-offset-4 decoration-[#8E5B68]">
              Contact
            </h4>
            <div className="space-y-2 md:space-y-3 text-gray-200 text-sm sm:text-base md:text-lg font-semibold">
              <p className="hover:text-white transition-colors break-all">drmichelleepstein@gmail.com</p>
              <p className="hover:text-white transition-colors">847-702-8777</p>
            </div>
          </div>
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-4 md:mb-5 uppercase tracking-wider text-white underline decoration-2 underline-offset-4 decoration-[#8E5B68]">
              Services
            </h4>
            <div className="space-y-2 md:space-y-3 text-gray-200 text-sm sm:text-base md:text-lg font-semibold">
              <p>Clinical Therapy</p>
              <p>Executive Coaching</p>
              <p>Telehealth in 43+ States</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-700 pt-8 md:pt-10 text-center">
          <p className="text-gray-200 text-xs sm:text-sm md:text-base font-semibold">
            &copy; 2026 Dr. Michelle A. Epstein.
          </p>
        </div>
      </div>
    </footer>
  );
}