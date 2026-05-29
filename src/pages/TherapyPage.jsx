import React, { useState, useEffect } from 'react';
import { Mail, Phone, X } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function TherapyPage() {
  const [showMindsetModal, setShowMindsetModal] = useState(false);
  
  useEffect(() => {
    // Check if Mindset popup has been shown this session
    const hasSeenMindset = sessionStorage.getItem('hasSeenMindsetPopup');
    if (!hasSeenMindset) {
      setShowMindsetModal(true);
      sessionStorage.setItem('hasSeenMindsetPopup', 'true');
    }
  }, []);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showMindsetModal) {
        setShowMindsetModal(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showMindsetModal]);

  const subspecialties = [
    "Anxiety & Depression",
    "Couples Therapy",
    "Chronic Stress",
    "Emotional Trauma",
    "Grief & Loss",
    "Low Self-Esteem",
    "Marital Stress",
    "Parenting Dynamics",
    "Body Image Issues",
    "Major Life Transitions"
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-2 md:px-6 bg-[#8E5B68]">
      {/* Mindset Matters Modal Popup */}
      {showMindsetModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mindset-modal-title"
          onClick={() => setShowMindsetModal(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowMindsetModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5B68]"
              aria-label="Close outcomes information"
            >
              <X size={24} className="text-gray-700" aria-hidden="true" />
            </button>

            {/* Mindset Content */}
            <div className="p-8 md:p-12">
              <h2 id="mindset-modal-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#8E5B68] mb-6" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
                OUTCOMES
              </h2>
              <div className="w-32 h-1 bg-[#8E5B68] mx-auto mb-8" aria-hidden="true"></div>
              
              <div className="space-y-6 text-2xl md:text-3xl text-gray-900 leading-relaxed">
                <p>
                  Collaborative talk therapies, such as <span className="font-bold italic">Cognitive Behavioral Therapy (CBT)</span>, emphasize cognitive (mindset) restructuring, skill development, and behavioral change with <span className="font-bold italic">demonstrated effectiveness</span> in treating depression, anxiety, stress, and other emotional disorders. <span className="font-bold">Average symptom improvement</span> ranges from <span className="font-bold">50-80%</span> across conditions.
                </p>
                <p>
                  Unlike medication, CBT <span className="font-bold italic">avoids</span> common pharmacological <span className="font-bold">side effects</span> AND has <span className="font-bold italic">strong long-term durability</span>, showing lasting benefits after therapy ends: CBT has low relapse rates (20-35%), as compared with medication discontinuation alone (60-80% relapse).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-full mx-auto px-1 md:px-4">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            CLINICAL THERAPY
          </h1>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg p-4 md:p-12 shadow-2xl mb-12">
          {/* Image - Floated right so text wraps around it */}
          <img
            src="/headshot2.png"
            alt="Dr. Michelle A. Epstein"
            className="w-full md:w-[350px] rounded-lg shadow-xl md:float-right md:ml-8 mb-6"
          />
          
          {/* All text - wraps around the image on desktop */}
          <div className="space-y-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed">
            <p>
              <span className="font-bold italic">Mindset matters...and it's all a matter of mindset...</span>
            </p>
            <p>
              Dr. Michelle brings <span className="font-bold italic">more than 30 years of professional experience</span> to her work as a Licensed Clinical Psychologist and Board Certified Executive & Leadership Coach, allowing her to provide <span className="font-bold italic">highly individualized</span> care that is tailored to meet each client's unique needs.
            </p>
            <p>
              As <span className="font-bold italic">a deeply attentive, curious</span> and <span className="font-bold italic">empathic</span> listener, Dr. Michelle acts as a "mirror" offering <span className="font-bold italic">non-judgmental, supportive insights</span> to help clients see themselves with greater clarity and compassion.
            </p>
            <p>
              Skillfully crafting each session to offer <span className="font-bold italic">something of value</span> - whether a meaningful insight, valuable strategy, or thoughtful psychoeducation – Dr. Michelle provides <span className="font-bold italic">highly individualized</span> and <span className="font-bold italic">solution-focused</span> support that is specifically tailored to productively meet each client's unique needs, with a focus on alleviating distress, promoting self-awareness, and empowering clients to make <span className="font-bold italic">lasting</span> and <span className="font-bold italic">measurable</span> improvements in their mental health, relationships, and overall well-being.
            </p>
          </div>
        </div>

        {/* Education & Training - BLACK BOX with WHITE BOLD text */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 ml-0 md:-ml-8" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            EDUCATION & TRAINING
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-black rounded-lg p-4 md:p-12 shadow-2xl mb-12">
          <div className="space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed">
            <p>
              Dr. Michelle was awarded a Doctorate (PhD) in Clinical Psychology from the <span className="font-bold italic">University of Illinois at Chicago</span>, and completed a <span className="italic">Pre-Doctoral Internship</span> at Boston Children's Hospital at <span className="font-bold italic">Harvard Medical School</span>, as well as a <span className="italic">Post-Doctoral Fellowship in Trauma</span> at <span className="font-bold italic">La Rabida Children's Hospital</span> in Chicago, where she was invited to join the staff of the Behavioral Health Department.
            </p>
            <p>
              Valued for her extensive experience and expertise in the mental health field, Dr. Michelle has been an on-air contributor to the <span className="font-bold italic">WGN-TV Morning News</span> in Chicago, where she discusses topics such as, Anxiety, Depression, and other mental health issues, and serves on the Advisory Board of the <span className="font-bold italic">Rebecca's Dream Foundation</span>, a nonprofit dedicated to reducing stigma and increasing awareness of mental illness.
            </p>
          </div>
        </div>

        {/* Services - WHITE BOX with BLACK text */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            SERVICES
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-12 shadow-2xl mb-12">
          <div className="space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-900 leading-relaxed">
            <p>
              Dr. Michelle works with college students, couples, and adult clients, and is credentialed with the Authority to Practice Interjurisdictional Telepsychology (APIT) via the Psychology Interjurisdictional Compact (PSYPACT). This enables her to provide telehealth services to clients in <span className="font-bold italic">43 participating states</span>, allowing for expanded access to care, and continuity of treatment for clients who relocate or travel for extended periods.
            </p>
            <p>
              She provides <span className="font-bold italic">practical, evidence-based tools</span> to help clients manage symptoms and strengthen their well-being and relationships. Her approach is grounded in <span className="font-bold italic">empirically supported modalities</span>, including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Assertive & Reflective Listening techniques, and informed by her own experience navigating the complexities of personal relationships, families, and parenting as a wife and mother of three young adults.
            </p>
            <p>
              Dr. Michelle offers <span className="font-bold italic">flexible telehealth services</span> tailored to each client's needs, with session options ranging from twice weekly, weekly, monthly, and even on an "as-needed" basis. Michelle will work with you to determine the cadence that best meets your needs.
            </p>
          </div>
        </div>

        {/* Subspecialties - BLACK BOX with BOLD WHITE text */}
        <div className="max-w-7xl mx-auto text-center mb-8 px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            SUBSPECIALTIES
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-black rounded-lg p-4 md:p-12 shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-48 max-w-6xl mx-auto">
            {subspecialties.map((specialty, index) => (
              <div key={index} className="flex items-center">
                <span className="text-white uppercase text-xl md:text-2xl mt-1">•</span>
                <span className="text-white uppercase font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl ml-2">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes - WHITE BOX with BLACK text */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            OUTCOMES
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-12 shadow-2xl mb-12">
          <div className="space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-900 leading-relaxed">
            <p>
                  Collaborative talk therapies, such as <span className="font-bold italic">Cognitive Behavioral Therapy (CBT)</span>, emphasize cognitive (mindset) restructuring, skill development, and behavioral change with <span className="font-bold italic">demonstrated effectiveness</span> in treating depression, anxiety, stress, and other emotional disorders. <span className="font-bold">Average symptom improvement</span> ranges from <span className="font-bold">50-80%</span> across conditions.
                </p>
                <p>
                  Unlike medication, CBT <span className="font-bold italic">avoids</span> common pharmacological <span className="font-bold">side effects</span> AND has <span className="font-bold italic">strong long-term durability</span>, showing lasting benefits after therapy ends: CBT has low relapse rates (20-35%), as compared with medication discontinuation alone (60-80% relapse).
                </p>
          </div>
        </div>

        {/* "Together we can..." - Large WHITE ITALIC CAMBRIA on wine background */}
        <div className="text-center my-16 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold italic text-white mb-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            Together we can turn Insight into Action . . .<br/>and Action into Meaningful Impact
          </h2>
        </div>

        {/* Contact Section - EXACT same as landing page */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            CONTACT
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-4 border-[#8E5B68] rounded-lg p-6 md:p-12 shadow-2xl">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic text-center text-gray-700 mb-8" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
              Reach out for a complimentary consultation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <a
                href="mailto:drmichelleepstein@gmail.com"
                className="flex items-center space-x-4 p-6 md:p-8 bg-[#F5E6E8] border-2 border-[#8E5B68] rounded-lg hover:bg-[#EBD6D9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5B68] focus:ring-offset-2"
                aria-label="Send email to Dr. Michelle Epstein"
              >
                <Mail size={36} className="text-[#8E5B68] flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-base md:text-xl font-bold text-gray-700">Email</p>
                  <p className="text-xs sm:text-base md:text-xl font-bold text-black break-all">drmichelleepstein@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:847-702-8777"
                className="flex items-center space-x-4 p-6 md:p-8 bg-[#F5E6E8] border-2 border-[#8E5B68] rounded-lg hover:bg-[#EBD6D9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5B68] focus:ring-offset-2"
                aria-label="Call or text Dr. Michelle Epstein at 847-702-8777"
              >
                <Phone size={36} className="text-[#8E5B68] flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs sm:text-base md:text-xl font-bold text-gray-700">Voice or Text</p>
                  <p className="text-xs sm:text-base md:text-xl font-bold text-black">847-702-8777</p>
                </div>
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h4 className="text-2xl md:text-3xl font-bold mb-6 text-black text-center">Send a Message</h4>
              <ContactForm context="therapy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}