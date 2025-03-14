import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy: React.FC = () => {
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
          
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead">
              This Cookie Policy explains how Mercury AI uses cookies and similar technologies to recognize you when you visit our website and use our CA Monitor & Sniper Bot platform ("the Service"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, Mercury AI) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>
            
            <h2>2. Types of Cookies We Use</h2>
            <p>We use the following types of cookies:</p>
            
            <h3>2.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the Service to function properly. They enable core functionality such as security, network management, and account authentication. You may disable these by changing your browser settings, but this may affect how the Service functions.
            </p>
            
            <h3>2.2 Performance and Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with the Service by collecting and reporting information anonymously. They help us improve the functionality and user experience of our website.
            </p>
            
            <h3>2.3 Functionality Cookies</h3>
            <p>
              These cookies enable the Service to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
            
            <h3>2.4 Targeting and Advertising Cookies</h3>
            <p>
              These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases, selecting advertisements that are based on your interests.
            </p>
            
            <h2>3. Specific Cookies We Use</h2>
            <table className="w-full border-collapse my-4">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2">Cookie Name</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Duration</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">session</td>
                  <td>Used to maintain user session</td>
                  <td>Session</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">auth_token</td>
                  <td>Authentication</td>
                  <td>30 days</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">_ga</td>
                  <td>Google Analytics</td>
                  <td>2 years</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">_gid</td>
                  <td>Google Analytics</td>
                  <td>24 hours</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">preferences</td>
                  <td>Saves user preferences</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
            
            <h2>4. How to Control Cookies</h2>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Service, but your access to some functionality and areas may be restricted.
            </p>
            <p>
              Here are links to cookie management instructions for common browsers:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-[#7cff00]">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer" className="text-[#7cff00]">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer" className="text-[#7cff00]">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noreferrer" className="text-[#7cff00]">Safari (Mac)</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noreferrer" className="text-[#7cff00]">Safari (iOS)</a></li>
            </ul>
            
            <h2>5. Do Not Track</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites you visit that you do not want to have your online activity tracked. Due to the lack of a common understanding of how to interpret the DNT signal, our Service does not currently respond to browser DNT signals.
            </p>
            
            <h2>6. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy on this page. We encourage you to review this policy periodically.
            </p>
            
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at privacy@mercuryai.example.com.
            </p>
            
            <p className="mt-8 text-gray-400">Last Updated: March 14, 2025</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;