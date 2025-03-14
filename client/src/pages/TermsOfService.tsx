import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <a className="inline-flex items-center text-[#7cff00] hover:underline mb-8">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </a>
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Mercury AI's CA Monitor & Sniper Bot platform ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              Mercury AI is an advanced CA (Contract Address) Monitor & Sniper Bot designed to track and analyze new token launches across multiple platforms. The Service provides tools for monitoring, analysis, and automated trading of cryptocurrency tokens.
            </p>
            
            <h2>3. User Registration</h2>
            <p>
              To access certain features of the Service, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and current.
            </p>
            
            <h2>4. Subscription and Payments</h2>
            <p>
              4.1. The Service offers subscription-based access with different tier levels (Basic, Pro, VIP).
            </p>
            <p>
              4.2. By subscribing to the Service, you agree to pay all fees associated with your selected subscription plan.
            </p>
            <p>
              4.3. All subscription fees are non-refundable except as expressly set forth in these Terms.
            </p>
            
            <h2>5. User Conduct</h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service</li>
              <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law</li>
              <li>Conduct denial of service attacks or similar disruptive activities</li>
              <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
            </ul>
            
            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, and software, are the exclusive property of Mercury AI and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2>7. Disclaimers and Limitation of Liability</h2>
            <p>
              7.1. The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
            </p>
            <p>
              7.2. Mercury AI does not guarantee the accuracy, timeliness, or completeness of information provided by the Service.
            </p>
            <p>
              7.3. Mercury AI shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
            </p>
            <p>
              7.4. Cryptocurrency trading involves significant risk. Users are solely responsible for their trading decisions and should conduct their own research before making any investment.
            </p>
            
            <h2>8. Termination</h2>
            <p>
              Mercury AI reserves the right to terminate or suspend access to the Service, without prior notice or liability, for any reason, including breach of these Terms.
            </p>
            
            <h2>9. Changes to Terms</h2>
            <p>
              Mercury AI reserves the right to modify these Terms at any time. We will notify users of any significant changes via email or through the Service.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>
            
            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at legal@mercuryai.example.com.
            </p>
            
            <p className="mt-8 text-gray-400">Last Updated: March 14, 2025</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;