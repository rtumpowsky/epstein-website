import React from 'react';
import { Mail, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function TherapyPage() {
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
    <div className="min-h-screen pt-28 pb-24 px-6 bg-[#8E5B68]">
      <div className="max-w-full mx-auto px-4">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            CLINICAL THERAPY
          </h1>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg p-12 shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center mb-6">
            {/* Text - first 2 paragraphs */}
            <div className="space-y-6 text-3xl md:text-4xl text-gray-900 leading-relaxed">
              <p>
                Dr. Michelle brings <span className="font-bold italic">more than 30 years of professional experience</span> to her work as a Licensed Clinical Psychologist and Board Certified Executive & Leadership Coach, allowing her to provide <span className="font-bold italic">highly individualized</span> care that is tailored to meet each client's unique needs.
              </p>
              <p>
                As a <span className="font-bold italic">deeply attentive, curious and empathic</span> listener, Dr. Michelle acts as a "mirror" offering <span className="font-bold italic">non-judgmental, supportive insights</span> to help clients see themselves with greater clarity and compassion.
              </p>
            </div>

            {/* Image - Right side */}
            <img
              src="/headshot2.png"
              alt="Dr. Michelle A. Epstein"
              className="w-full md:w-[400px] rounded-lg shadow-xl self-center"
            />
          </div>
          
          {/* Third paragraph - spans full width below */}
          <p className="text-3xl md:text-4xl text-gray-900 leading-relaxed">
            Skillfully crafting each session to offer <span className="font-bold italic">something of value</span> - whether a meaningful insight, valuable strategy, or thoughtful psychoeducation – Dr. Michelle provides <span className="font-bold italic">highly individualized and solution-focused</span> support that is specifically tailored to productively meet each client's unique needs, with a focus on alleviating distress, promoting self-awareness, and empowering clients to make <span className="font-bold italic">lasting and measurable</span> improvements in their mental health, relationships, and overall well-being.
          </p>
        </div>

        {/* Education & Training - BLACK BOX with WHITE BOLD text */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 ml-0 md:-ml-8" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            EDUCATION & TRAINING
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-black rounded-lg p-12 shadow-2xl mb-12">
          <div className="space-y-6 text-2xl md:text-3xl text-white leading-relaxed">
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            SERVICES
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-white rounded-lg p-12 shadow-2xl mb-12">
          <div className="space-y-6 text-2xl md:text-3xl text-gray-900 leading-relaxed">
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
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            SUBSPECIALTIES
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-black rounded-lg p-12 shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16 max-w-6xl mx-auto ml-0 md:ml-56">
            {subspecialties.map((specialty, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-white uppercase text-2xl mt-1">•</span>
                <span className="text-white uppercase font-bold text-2xl md:text-3xl">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* "Together we can..." - Large WHITE ITALIC CAMBRIA on wine background */}
        <div className="text-center my-16 px-2">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold italic text-white mb-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            Together we can turn Insight into Action . . .<br/>and Action into Meaningful Impact
          </h2>
        </div>

        {/* Contact Section - EXACT same as landing page */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            CONTACT
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-4 border-[#8E5B68] rounded-lg p-12 shadow-2xl">
            <p className="text-3xl md:text-4xl font-bold italic text-center text-gray-700 mb-8" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
              Reach out for a complimentary consultation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <a
                href="mailto:drmichelleepstein@gmail.com"
                className="flex items-center space-x-4 p-8 bg-[#F5E6E8] border-2 border-[#8E5B68] rounded-lg hover:bg-[#EBD6D9] transition-colors"
              >
                <Mail size={36} className="text-[#8E5B68]" />
                <div>
                  <p className="text-xl font-bold text-gray-700">Email</p>
                  <p className="text-xl font-bold text-black break-words">drmichelleepstein@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:847-702-8777"
                className="flex items-center space-x-4 p-8 bg-[#F5E6E8] border-2 border-[#8E5B68] rounded-lg hover:bg-[#EBD6D9] transition-colors"
              >
                <Phone size={36} className="text-[#8E5B68]" />
                <div>
                  <p className="text-xl font-bold text-gray-700">Voice or Text</p>
                  <p className="text-xl font-bold text-black">847-702-8777</p>
                </div>
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h4 className="text-3xl font-bold mb-6 text-black text-center">Send a Message</h4>
              <ContactForm context="therapy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}