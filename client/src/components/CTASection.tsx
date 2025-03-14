import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const CTASection: React.FC = () => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#7cff00]/5 to-[#111111]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#222222]/80 backdrop-blur-lg border border-white/5 rounded-2xl p-8 md:p-12 text-center">
          <div 
            ref={(el) => registerElement('cta-content', el)} 
            className={`transition-all duration-1000 ${
              animatedElements['cta-content'] 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to <span className="text-[#7cff00]">Transform</span> Your Trading Results?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Join our waitlist for the Mercury AI beta launch and be among the first to experience the future of automated crypto sniping and monitoring.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#7cff00] text-black rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg">
                Join Waitlist
              </button>
              <button className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-lg font-semibold transition-all hover:bg-white/5">
                Learn More
              </button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">Ultra-Fast</div>
                <div className="text-gray-400 text-sm">Transaction Execution</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10"></div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">AI-Powered</div>
                <div className="text-gray-400 text-sm">Analysis & Filtering</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10"></div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">Multi-Chain</div>
                <div className="text-gray-400 text-sm">Compatibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
