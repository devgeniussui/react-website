import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const Disclaimer: React.FC = () => {
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
          
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-[#1a1a1a] border border-[#333] p-6 rounded-lg mb-8">
              <p className="font-medium text-[#ff9800]">
                <strong>IMPORTANT NOTICE:</strong> Cryptocurrency trading involves substantial risk and is not suitable for every investor. The high degree of leverage can work against you as well as for you. Before deciding to trade cryptocurrency, you should carefully consider your investment objectives, level of experience, and risk appetite.
              </p>
            </div>
            
            <h2>1. No Investment Advice</h2>
            <p>
              The information provided by Mercury AI ("we," "us," or "our") on our CA Monitor & Sniper Bot platform (the "Service") is for general informational purposes only. All information on the Service is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service.
            </p>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Service or reliance on any information provided on the Service. Your use of the Service and your reliance on any information on the Service is solely at your own risk.
            </p>
            
            <h2>2. No Financial Advice</h2>
            <p>
              The Service is not intended to provide financial, investment, or trading advice. The content on our platform, including token analysis, market insights, and automated trading features, should not be construed as financial advice. We are not licensed or qualified to provide financial advice.
            </p>
            <p>
              The information contained on the Service is provided for informational purposes only and should not be interpreted as an endorsement, recommendation, or solicitation to buy, sell, or otherwise trade any asset.
            </p>
            
            <h2>3. Trading Risks</h2>
            <p>
              Cryptocurrency trading involves significant risks, including but not limited to:
            </p>
            <ul>
              <li>Extreme price volatility</li>
              <li>Potential for complete loss of invested capital</li>
              <li>Liquidity risks and slippage</li>
              <li>Regulatory and legal uncertainties</li>
              <li>Technical risks and smart contract vulnerabilities</li>
              <li>Market manipulation</li>
              <li>Operational risks related to exchanges and wallets</li>
            </ul>
            <p>
              Past performance is not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on the Service.
            </p>
            
            <h2>4. Automated Trading Risks</h2>
            <p>
              The sniper bot and other automated trading features come with additional risks:
            </p>
            <ul>
              <li>Technical failures and execution delays</li>
              <li>Unintended trades or transaction errors</li>
              <li>Market conditions that may cause trades to execute at disadvantageous prices</li>
              <li>Network congestion affecting transaction confirmations</li>
              <li>Front-running or other adverse market participant actions</li>
            </ul>
            <p>
              The effectiveness of our automated trading tools may vary depending on market conditions, network congestion, and other factors beyond our control.
            </p>
            
            <h2>5. Technical Limitations</h2>
            <p>
              Our Service relies on various third-party services, APIs, and blockchain networks. We do not guarantee uninterrupted access to the Service, and we are not responsible for any losses that may occur due to technical issues, including but not limited to:
            </p>
            <ul>
              <li>Server downtime</li>
              <li>Blockchain network congestion or failures</li>
              <li>API limitations or changes</li>
              <li>Connectivity issues</li>
              <li>Software bugs or errors</li>
            </ul>
            
            <h2>6. Independent Research</h2>
            <p>
              We strongly encourage users to conduct their own research and due diligence before making any investment decisions. No one associated with Mercury AI is a registered broker-dealer or investment advisor.
            </p>
            <p>
              You should consult with a qualified professional before making any financial decisions, including investments in cryptocurrencies.
            </p>
            
            <h2>7. Forward-Looking Statements</h2>
            <p>
              The Service may contain certain forward-looking statements, projections, and business outlooks. These statements are only predictions and involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied by such forward-looking statements.
            </p>
            
            <h2>8. Compliance with Local Laws</h2>
            <p>
              It is the responsibility of the user to ensure that their use of our Service complies with all local, state, national, and international laws and regulations that may apply to cryptocurrency trading.
            </p>
            
            <h2>9. Changes to Disclaimer</h2>
            <p>
              We reserve the right to modify this disclaimer at any time. Changes and clarifications will take effect immediately upon their posting on the website. We encourage users to check this page periodically for any changes.
            </p>
            
            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about this disclaimer, please contact us at legal@mercuryai.example.com.
            </p>
            
            <p className="mt-8 text-gray-400">Last Updated: March 14, 2025</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;