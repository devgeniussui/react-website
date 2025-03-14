import React from 'react';
import { RotateCw, BarChart2, Zap, Shield } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const BusinessSection: React.FC = () => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  const benefits = [
    {
      id: 'time',
      icon: <RotateCw size={24} />,
      title: 'Time Efficiency',
      description: 'Automate your monitoring and trading processes, saving you hours of manual work and ensuring you never miss an opportunity.'
    },
    {
      id: 'decision',
      icon: <BarChart2 size={24} />,
      title: 'Enhanced Decision Making',
      description: 'Make data-driven trading decisions with real-time analytics and AI-powered recommendations tailored to your strategy.'
    },
    {
      id: 'edge',
      icon: <Zap size={24} />,
      title: 'Competitive Edge',
      description: 'Stay ahead of other traders with lightning-fast execution and early access to emerging opportunities in the market.'
    },
    {
      id: 'risk',
      icon: <Shield size={24} />,
      title: 'Risk Mitigation',
      description: 'Reduce exposure to scams and low-quality projects with our advanced security checks and AI risk assessment system.'
    }
  ];
  
  return (
    <section id="business" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={(el) => registerElement('business-header', el)} 
          className={`text-center mb-16 transition-all duration-1000 ${
            animatedElements['business-header'] 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#7cff00] mb-4">Business Benefits</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Mercury AI delivers tangible advantages that help you maximize your crypto trading potential.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={(el) => registerElement('business-benefits', el)} 
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              animatedElements['business-benefits'] 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.id} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#7cff00]/10 rounded-lg flex items-center justify-center text-[#7cff00] flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            ref={(el) => registerElement('business-chart', el)} 
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              animatedElements['business-chart'] 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="bg-[#222222]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7cff00]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                      Portfolio Performance
                    </h3>
                    <div className="text-[#7cff00] font-medium">+213.5%</div>
                  </div>
                  
                  <div className="bg-[#111111] rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-gray-400">Performance with Mercury AI</div>
                      <div className="text-sm font-medium text-white">Last 30 days</div>
                    </div>
                    
                    <div className="relative h-60">
                      {/* Chart SVG */}
                      <div className="absolute inset-0 overflow-hidden">
                        <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="none">
                          <path d="M0,200 Q40,180 80,160 T160,140 T240,100 T320,60 T400,20" fill="none" stroke="#7cff00" strokeWidth="3" />
                          <path d="M0,200 Q40,190 80,180 T160,170 T240,160 T320,140 T400,120" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
                        </svg>
                      </div>
                      
                      {/* Chart Labels */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                        <div>Jan 01</div>
                        <div>Jan 07</div>
                        <div>Jan 14</div>
                        <div>Jan 21</div>
                        <div>Jan 28</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#111111] rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                      <div className="text-2xl font-bold text-white">84.2%</div>
                      <div className="text-xs text-[#7cff00]">+12.6% from last month</div>
                    </div>
                    <div className="bg-[#111111] rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Average ROI</div>
                      <div className="text-2xl font-bold text-white">3.8x</div>
                      <div className="text-xs text-[#7cff00]">+0.5x from last month</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-[#7cff00]/10 rounded-lg border border-[#7cff00]/20">
                    <div className="flex items-center gap-2 text-[#7cff00] font-medium mb-2">
                      <Zap size={16} />
                      Potential Revenue Increase
                    </div>
                    <p className="text-sm text-gray-300">Users typically see a 40-70% increase in trading profits after implementing Mercury AI strategies.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -inset-4 bg-[#7cff00]/5 blur-3xl rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
