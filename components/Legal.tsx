import React from 'react';
import { CrownDoodle } from './Doodles';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const date = "Effective Date: October 24, 2024";

  return (
    <section className="pt-24 md:pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 relative">
             <CrownDoodle className="absolute -top-6 md:-top-8 left-[60%] w-8 h-8 md:w-10 md:h-10 text-gray-200" />
            <h1 className="text-3xl md:text-5xl font-display font-bold text-ink mb-2 md:mb-4">{title}</h1>
            <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-widest">{date}</p>
        </div>

        {/* Content */}
        <div className="prose prose-base md:prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-gray-600 prose-a:text-black marker:text-black mx-auto">
            {isPrivacy ? (
                <>
                    <h3>1. Introduction</h3>
                    <p>
                        At Circle Meet, we believe privacy is a fundamental human right. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.
                    </p>
                    <h3>2. Information We Collect</h3>
                    <p>
                        We intentionally collect as little data as possible. When you start a meeting:
                    </p>
                    <ul>
                        <li>We do not store video or audio recordings.</li>
                        <li>We do not require account registration for guests.</li>
                        <li>We collect anonymous usage statistics to improve performance.</li>
                    </ul>
                    <h3>3. Data Security</h3>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information. All video streams are encrypted in transit.
                    </p>
                    <h3>4. Third-Party Tools</h3>
                    <p>
                        We may use third-party tools (like Google Analytics) to understand website traffic. These tools may use cookies.
                    </p>
                    <h3>5. Contact Us</h3>
                    <p>
                        If you have questions or comments about this Privacy Policy, please contact us at privacy@circlemeet.in.
                    </p>
                </>
            ) : (
                <>
                    <h3>1. Agreement to Terms</h3>
                    <p>
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Circle Meet (“we,” “us” or “our”), concerning your access to and use of the Circle Meet website.
                    </p>
                    <h3>2. Acceptable Use</h3>
                    <p>
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>
                    <h3>3. Intellectual Property Rights</h3>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us.
                    </p>
                    <h3>4. Modifications and Interruptions</h3>
                    <p>
                        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Services without notice at any time.
                    </p>
                     <h3>5. Governing Law</h3>
                    <p>
                        These Terms shall be governed by and defined following the laws of India. Circle Meet and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>
                </>
            )}
        </div>
      </div>
    </section>
  );
};

export default Legal;