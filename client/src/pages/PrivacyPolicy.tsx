import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
          
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead">
              At Mercury AI, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our CA Monitor & Sniper Bot platform ("the Service").
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <h3>1.1 Personal Information</h3>
            <ul>
              <li>Account information (email address, username, password)</li>
              <li>Billing information (payment method details)</li>
              <li>Profile information (optional bio, profile picture)</li>
            </ul>
            
            <h3>1.2 Automatically Collected Information</h3>
            <ul>
              <li>Log data (IP address, browser type, pages visited, time spent)</li>
              <li>Device information (device type, operating system)</li>
              <li>Cookie and tracking data</li>
            </ul>
            
            <h3>1.3 Blockchain and Wallet Information</h3>
            <ul>
              <li>Wallet addresses (when provided for trading functionality)</li>
              <li>Transaction history related to the Service's operations</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To process payments and manage subscriptions</li>
              <li>To improve and personalize user experience</li>
              <li>To communicate with you regarding service updates, support, and marketing</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
            </ul>
            
            <h2>3. Data Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>With service providers who help us operate, provide, and improve the Service</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transaction (e.g., merger, acquisition)</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
            
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
            </p>
            
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>
            
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities on our Service. You can control cookies through your browser settings, but disabling certain cookies may limit your ability to use some features of the Service.
            </p>
            
            <h2>8. Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by Mercury AI. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies.
            </p>
            
            <h2>9. Children's Privacy</h2>
            <p>
              Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
            </p>
            
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We will take appropriate measures to ensure that your personal information remains protected in accordance with this Privacy Policy.
            </p>
            
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
            
            <h2>12. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@mercuryai.example.com.
            </p>
            
            <p className="mt-8 text-gray-400">Last Updated: March 14, 2025</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;