import React from 'react';
import { Mail, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function CoachingPage() {
  const subspecialties = [
    "Mindset Shifts",
    "Leadership Skills",
    "Communication Skills",
    "Time & Productivity Management",
    "Decision Fatigue",
    "Leadership Isolation",
    "Identity Shifts in Senior Roles",
    "Imposter Syndrome",
    "Professional & Personal Transitions",
    "Complex Decision-Making",
    "Challenging Professional Dynamics",
    "Difficult Conversations"
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 bg-[#8E5B68]">
      <div className="max-w-full mx-auto px-4">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            EXECUTIVE COACHING
          </h1>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>

        {/* Main Content - WHITE BOX with intro paragraphs and image */}
        <div className="bg-white rounded-lg p-12 shadow-2xl mb-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start mb-6">
            {/* Text - first 3 paragraphs */}
            <div className="space-y-6 text-xl md:text-2xl text-gray-900 leading-relaxed">
              <p>
                <span className="font-bold italic">Leadership demands can create stress and distraction, leaving even the most talented and capable executives feeling overwhelmed . . .</span>
              </p>
              <p>
                As a Licensed Clinical Psychologist and Board Certified Executive & Leadership Coach, Michelle relies on <span className="font-bold italic">more than 30 years of professional experience</span>, and possesses the unique and invaluable ability to blend <span className="font-bold italic">astute psychological insight</span> with <span className="font-bold italic">proven leadership strategies</span>.
              </p>
              <p>
                <span className="font-bold italic">A deeply attentive, curious and thoughtful</span> listener, who offers non-judgmental, supportive insights, Michelle acts as a "mirror" to help clients see themselves with deeper clarity. She then skillfully crafts each session to provide <span className="font-bold italic">highly individualized and solution-focused</span> coaching that is specifically tailored to productively meet each client's unique needs.
              </p>
            </div>

            {/* Image - Right side */}
            <img
              src="/headshot3.jpg"
              alt="Dr. Michelle A. Epstein"
              className="w-full max-w-sm h-full rounded-lg shadow-xl"
            />
          </div>
          
          {/* Fourth paragraph - spans full width below */}
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
            She strives to offer <span className="font-bold italic">something of value</span> in every session, supporting professionals as they cut through their internal "noise" to build greater self-awareness, shift unproductive mindsets, and develop high-impact habits that allow them to manage time and stress more effectively, make sharper decisions, and lead with greater influence, impact and fulfillment. This approach allows her clients to not only enhance their professional performance, but also create <span className="font-bold italic">lasting and measurable</span> improvements in their physical health, emotional well-being, personal and professional relationships, and overall sense of purpose.
          </p>
        </div>

        {/* Education & Training - BLACK BOX with WHITE BOLD text */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 -ml-8" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            EDUCATION & TRAINING
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-black rounded-lg p-12 shadow-2xl mb-12">
          <div className="space-y-6 text-2xl md:text-3xl text-white font leading-relaxed">
            <p>
              Michelle holds a Doctorate (PhD) in Clinical Psychology from the <span className="font-bold italic">University of Illinois at Chicago</span>, as well as credentialing as a Board Certified Executive & Leadership Coach (BCC) from the <span className="font-bold italic">Center for Executive Coaching.</span>
            </p>
            <p>
              She completed a Pre-Doctoral Internship at the Boston Children's Hospital at <span className="font-bold italic">Harvard Medical School</span>, as well as a Post-Doctoral Fellowship in Trauma at <span className="font-bold italic">La Rabida Children's Hospital</span> in Chicago.
            </p>
            <p>
              Valued for her extensive experience and expertise, Michelle has been a frequent on-air contributor to the <span className="font-bold italic">WGN-TV Morning News</span> in Chicago, and serves on the Advisory Board of the <span className="font-bold italic">Rebecca's Dream Foundation</span>, a nonprofit dedicated to reducing stigma and increasing awareness of mental illness.
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
              Michelle uses <span className="font-bold italic">practical, evidence-based tools</span> to help clients identify and change faulty narratives and ingrained habits that hinder productivity and fulfillment. She teaches clients to "respond" rather than "react" in fast-paced, high-pressured work environments, helping them to hone their communication skills to be intentional and impactful, and teaching them to pivot in the face of problems, perceiving obstacles as opportunities.
            </p>
            <p>
              Michelle offers <span className="font-bold italic">flexible virtual sessions</span> tailored specifically to each client's needs, with session options ranging from weekly to monthly, or even on an "as-needed" basis for moments of crisis or intense stress. Michelle will work with you to determine the cadence that best meets your needs. Many clients invest directly in her services for professional growth, although Michelle does offer corporate plans and will work with you to explore employer sponsorship options.
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
          <div className="grid md:grid-cols-2 gap-6">
            {subspecialties.map((specialty, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-white text-2xl mt-1">•</span>
                <span className="text-white uppercase font-bold text-1xl md:text-3xl">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Statistics - WHITE BOX with BLACK text and BOLD/ITALIC formatting */}
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            RETURN ON INVESTMENT
          </h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>
        <div className="bg-white rounded-lg p-12 shadow-2xl mb-12">
          <div className="space-y-6 text-2xl md:text-3xl text-gray-900 leading-relaxed">
            <p>
              A Metrix Global study found that Executive Coaching has a staggering <span className="font-bold italic">788% return on investment (ROI)</span>, as seen in enhanced work performance, improved collaboration, increases in revenue, and greater employee retention.
            </p>
            <p>
              In addition, the <span classname="font-bold">International Coaching Federation's</span> 2023 Global Study found that:
            </p>
            <ul className="space-y-3 ml-8">
              <li className="flex items-start space-x-3">
                <span className="text-2xl mt-1">•</span>
                <span><span className="font-bold">80%</span> of people who receive coaching report <span className="font-bold italic">increased self-confidence</span></span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-2xl mt-1">•</span>
                <span><span className="font-bold">70%</span> experience <span className="font-bold italic">improved work performance, relationships, and communication</span></span>
              </li>
              <p className="ml-5"> <span className="font-bold">AND</span></p>
              <li className="flex items-start space-x-3">
                <span className="text-2xl mt-1">•</span>
                <span><span className="font-bold">96%</span> of clients say they would <span className="font-bold italic">repeat the coaching experience</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* "Together we can..." - Large WHITE ITALIC CAMBRIA on wine background */}
        <div className="text-center my-16">
          <h2 className="text-5xl md:text-7xl font-bold italic text-white mb-4" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
            Together we can turn Peak Potential . . .<br/>into Peak Performance
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

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <a
                href="mailto:drmichelleepstein@gmail.com"
                className="flex items-center space-x-4 p-8 bg-[#F5E6E8] border-2 border-[#8E5B68] rounded-lg hover:bg-[#EBD6D9] transition-colors"
              >
                <Mail size={36} className="text-[#8E5B68]" />
                <div>
                  <p className="text-xl font-bold text-gray-700">Email</p>
                  <p className="text-xl font-bold text-black">drmichelleepstein@gmail.com</p>
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
              <ContactForm context="coaching" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}