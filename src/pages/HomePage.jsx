import React, { useState } from 'react';
import { Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
 
export default function HomePage({ setCurrentPage }) {
  const [currentEndorsement, setCurrentEndorsement] = useState(0);
  
  const endorsements = [
    {
      text: "I found my work with Dr. Michelle Epstein to be incredibly productive and impactful. She offers thoughtful career guidance, practical tools, and highly valuable resources, while also creating space for deep listening, clarity, and meaningful reflection. Our sessions sharpened my thinking, helped me process information with greater ease, and enabled me to move forward with renewed confidence and purpose.",
      attribution: "— Vice President, Corporate Philanthropy<br/>Fortune 500 Company"
    },
    {
      text: "As a Divisional President of a large organization, I am constantly confronting the pressures and complexities of executive leadership. Few people understand what that level of responsibility demands... but Michelle does.<br/><br/>As a Doctor of Psychology, she brings a rare depth to executive coaching. With an understanding of the science behind stress, emotion, and performance, she offers practical, strategic guidance for leaders operating in high-stakes environments.<br/><br/>During some of the most challenging periods of my leadership journey, she helped me gain clarity, regulate pressure, and navigate corporate dynamics with confidence and composure.<br/><br/>For any executive who wants to lead more powerfully and sustainably, I recommend her without hesitation.",
      attribution: "— Division President & Former CEO<br/>Higher Education & E-Learning"
    },
    {
      text: "Working with Michelle empowered me during a time of complex career and life decisions. Her sharp insight, deep empathy, and skill in asking precisely the right questions created a rare combination of thoughtful perspective and practical guidance.<br/><br/>Michelle helped me pause and step back, allowing me to think with greater intention and clarity. She supported me in making deliberate, courageous choices that truly aligned with my values and long-term goals. Her ability to listen deeply and \"cut through the noise\" enabled me to focus on what truly mattered, both professionally and personally.<br/><br/>I left every conversation with increased confidence and conviction in my decisions. I highly recommend Michelle as an invaluable coach for any executive navigating complexity, transitions, or critical inflection points.",
      attribution: "— Associate Director, Client HR Operations<br/>Fortune Global 500 Company"
    }
  ];
  
  const nextEndorsement = () => {
    setCurrentEndorsement((prev) => (prev + 1) % endorsements.length);
  };
  
  const prevEndorsement = () => {
    setCurrentEndorsement((prev) => (prev - 1 + endorsements.length) % endorsements.length);
  };
  
  return (
    <div className="min-h-screen bg-[#8E5B68]">
      {/* Name Banner - Grey/White */}
      <div className="bg-gray-100 pt-24 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Dr. MICHELLE A. EPSTEIN, PhD
          </h1>
          <div className="space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">Licensed Clinical Psychologist</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">Board Certified Executive & Leadership Coach</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">On-Air Media Contributor</p>
          </div>
        </div>
      </div>
 
      {/* Control Your Narrative Section - BIGGER and ITALIC */}
      <div className="py-12 px-2">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold italic text-white mb-12" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            Control your narrative . . . or it will control you . . .
          </h2>
        </div>
 
        {/* Image and Bio Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-2 md:px-4">
          {/* Image - Left Side */}
          <div className="flex items-start">
            <img
              src="/headshot1.png"
              alt="Dr. Michelle A. Epstein"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
 
          {/* Bio - Right Side - Black Box with White Text in Cambria - CORRECTED BOLDING */}
          <div className="bg-black p-4 md:p-10 rounded-lg shadow-2xl flex items-center">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
              As a Harvard-trained Clinical Psychologist and Executive/Leadership Coach with over 30 years of experience, Michelle possesses the unique and invaluable ability to blend <span className="font-bold italic">astute psychological insight</span> with <span className="font-bold italic">proven leadership strategies.</span> This approach allows her clients to examine their personal narratives and cut through internal "noise" to build greater self-awareness, shift unproductive mindsets, and empower <span className="font-bold italic">lasting, measurable improvements</span> in mental health, relationships, productivity, impact, and overall well-being.
            </p>
          </div>
        </div>

        <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic text-white mb-12 px-2 md:px-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
                "Language does not merely depict reality . . . it actively constructs it."
        </h3>
        <br />
 
        {/* Language Quote Section - White Box with Cabernet Border - Cambria Font */}
        <div className="max-w-7xl mx-auto mb-12 px-2 md:px-4">
          <div className="bg-white border-2 md:border-4 border-[#8E5B68] p-4 md:p-10 rounded-lg shadow-2xl">
            <div className="space-y-6 text-black leading-relaxed" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Words matter<span className="inline-block">&nbsp;.&nbsp;.&nbsp;.</span>
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Self-limiting narratives drive self-defeating mindsets, and our internal dialogues subtly, but powerfully, impact our beliefs about what is (im)possible.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Using language intentionally changes the story, and empowers us to reshape our perceptions, reclaim control, and make clearer, more confident decisions.
              </p>
            </div>
          </div>
        </div>
 
        {/* CTA Text - WIDER and BIGGER Bold White Cambria Font */}
        <div className="max-w-full mx-auto text-center mb-8 px-2 md:px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            Let's start a productive conversation today!
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            Please click below to learn more about Michelle's Clinical and Coaching services:
          </p>
        </div>
 
        {/* Service Buttons - White boxes with Blue/Cabernet Double Border */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-4 items-stretch">
          <button
            onClick={() => setCurrentPage('therapy')}
            className="bg-white border-4 border-gray-600 shadow-[0_0_0_4px_#8E5B68] rounded-lg p-6 md:p-12 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="flex-1 flex flex-col">
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-black mb-2">Click here for</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 flex-1">
                CLINICAL<br/>THERAPY
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-bold italic text-gray-700 min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] flex items-start justify-center text-center">
                Compassionate, evidence-based therapy
              </p>
            </div>
          </button>
          <button
            onClick={() => setCurrentPage('coaching')}
            className="bg-white border-4 border-gray-600 shadow-[0_0_0_4px_#8E5B68] rounded-lg p-6 md:p-12 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="flex-1 flex flex-col">
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-black mb-2">Click here for</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 flex-1">
                EXECUTIVE<br/>COACHING
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl font-bold italic text-gray-700 min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] flex items-start justify-center text-center">
                Strategic guidance for leaders
              </p>
            </div>
          </button>
        </div>
 
        {/* ENDORSEMENTS Title */}
        <div className="max-w-7xl mx-auto text-center mb-8 px-2 md:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            ENDORSEMENTS
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
 
        {/* Endorsements Section - Carousel with 3 visible slides */}
        <div className="max-w-full mx-auto mb-16 px-2 md:px-4 pt-12 pb-12 lg:pt-4 lg:pb-4 overflow-x-hidden">
          <div className="relative max-w-7xl mx-auto">
            {/* Carousel Container with 3 slides visible */}
            <div className="relative min-h-[800px] flex items-center justify-center">
              {endorsements.map((endorsement, index) => {
                const offset = index - currentEndorsement;
                const isActive = index === currentEndorsement;
                const isAdjacent = Math.abs(offset) === 1 || Math.abs(offset) === endorsements.length - 1;
                
                // Calculate actual offset for circular display
                let displayOffset = offset;
                if (offset > endorsements.length / 2) displayOffset = offset - endorsements.length;
                if (offset < -endorsements.length / 2) displayOffset = offset + endorsements.length;
                
                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500 ease-in-out"
                    style={{
                      transform: `translateX(${displayOffset * 75}%) scale(${isActive ? 1 : 0.85})`,
                      opacity: isActive ? 1 : isAdjacent ? 0.4 : 0,
                      zIndex: isActive ? 10 : 1,
                      width: '55%',
                    }}
                  >
                    <div className="bg-black rounded-lg p-4 md:p-8 lg:p-10 shadow-2xl min-h-[800px] flex items-center justify-center">
                      <p 
                        className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-center"
                        dangerouslySetInnerHTML={{ 
                          __html: `"${endorsement.text}"<br/><br/><span class="text-xs sm:text-sm lg:text-base">${endorsement.attribution}</span>` 
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              
              {/* Previous Button */}
              <button
                onClick={prevEndorsement}
                className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-900 p-2 md:p-3 rounded-full transition-all z-20 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8E5B68]"
                aria-label="Previous endorsement"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              
              {/* Next Button */}
              <button
                onClick={nextEndorsement}
                className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-900 p-2 md:p-3 rounded-full transition-all z-20 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8E5B68]"
                aria-label="Next endorsement"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
              {endorsements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEndorsement(index)}
                  className={`h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#8E5B68] ${
                    index === currentEndorsement ? 'bg-white w-8' : 'bg-white bg-opacity-50 w-3'
                  }`}
                  aria-label={`Go to endorsement ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
 
        {/* WGN Video Section - WIDER */}
        <div className="max-w-7xl mx-auto text-center mb-8 px-2 md:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            WGN-TV NEWS FEATURES
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="max-w-full mx-auto mb-16 px-2 md:px-4">
          <div className="bg-white rounded-lg p-4 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <a
                href="https://wgntv.com/morning-news/psychologist-sheds-light-on-how-to-treat-anxiety/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                <img 
                  src="/wgn1.png"
                  alt="How to Treat Anxiety"
                  className="w-full h-64 md:h-80 rounded-lg object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all group-hover:scale-110">
                    <div className="text-4xl md:text-5xl text-white ml-1">▶️</div>
                  </div>
                </div>
              </a>
              <a
                href="https://wgntv.com/morning-news/michelle-epstein-shares-tips-on-coping-with-covid-19-stress-and-anxiety/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                <img 
                  src="/WGN2_NEW.png"
                  alt="13 Reasons Why"
                  className="w-full h-64 md:h-80 rounded-lg object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all group-hover:scale-110">
                    <div className="text-4xl md:text-5xl text-white ml-1">▶️</div>
                  </div>
                </div>
              </a>
              <a
                href="https://wgntv.com/morning-news/clinical-psychologist-dr-michelle-epstein-talks-mental-health-and-13-reasons-why/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                <img 
                  src="/wgn3.png"
                  alt="Mental Health Discussion"
                  className="w-full h-64 md:h-80 rounded-lg object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all group-hover:scale-110">
                    <div className="text-4xl md:text-5xl text-white ml-1">▶️</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
 
        {/* Certifications/Badges Section - WIDER with bigger badges and spaced schools */}
        <div className="max-w-7xl mx-auto text-center mb-8 px-2 md:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            CREDENTIALS
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="max-w-full mx-auto mb-16 px-2 md:px-4">
          <div className="bg-white rounded-lg p-4 md:p-10 shadow-2xl">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
              <img src="/certs1.jpg" alt="Certification 1" className="h-52 w-auto object-contain" />
              <img src="/certs2.jpg" alt="Certification 2" className="h-56 w-auto object-contain" />
              <img src="/certs3.jpg" alt="Certification 3" className="h-56 w-auto object-contain" />
              <img src="/certs4.jpg" alt="Certification 4" className="h-56 w-auto object-contain" />
              <img src="/certs5.jpg" alt="Certification 5" className="h-56 w-auto object-contain" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-32">
              <img src="/Harvard.jpg" alt="Harvard" className="h-44 w-auto object-contain" />
              <img src="/UIUC.jpg" alt="UIUC" className="h-44 w-auto object-contain" />
              <img src="/UIC.png" alt="UIC" className="h-44 w-auto object-contain" />
            </div>
          </div>
        </div>
 
        {/* Contact Section - Updated with larger fonts and bold labels */}
        <div className="max-w-7xl mx-auto text-center mb-8 px-2 md:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            CONTACT
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto px-2 md:px-4">
          <div className="bg-white border-4 border-[#8E5B68] rounded-lg p-4 md:p-12 shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic text-center text-gray-700 mb-8" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
              Reach out for a complimentary consultation
            </h2>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <a
                href="mailto:drmichelleepstein@gmail.com"
                className="flex items-center space-x-4 p-8 bg-[#F5E6E8] border-2 border-[#8E5B68] rounded-lg hover:bg-[#EBD6D9] transition-colors"
              >
                <Mail size={36} className="text-[#8E5B68] flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-base md:text-xl font-bold text-gray-700">Email</p>
                  <p className="text-xs sm:text-base md:text-xl font-bold text-black break-all">drmichelleepstein@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:847-702-8777"
                className="flex items-center space-x-4 p-8 bg-[#F5E6E8] border-2 border-[#8E5B68] rounded-lg hover:bg-[#EBD6D9] transition-colors"
              >
                <Phone size={36} className="text-[#8E5B68] flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-base md:text-xl font-bold text-gray-700">Voice or Text</p>
                  <p className="text-xs sm:text-base md:text-xl font-bold text-black">847-702-8777</p>
                </div>
              </a>
            </div>
 
            <div className="bg-gray-50 rounded-lg p-8">
              <h4 className="text-2xl sm:text-3xl font-bold mb-6 text-black text-center">Send a Message</h4>
              <ContactForm context="general" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}