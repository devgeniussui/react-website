import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

interface PhaseProps {
  number: number;
  title: string;
  items: string[];
  delay?: number;
}

const Phase: React.FC<PhaseProps> = ({ number, title, items, delay = 0 }) => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  return (
    <div 
      ref={(el) => registerElement(`phase-${number}`, el)} 
      className={`bg-[#0f0f0f] border border-[#7cff00]/10 rounded-xl p-6 transition-all duration-700 ${
        animatedElements[`phase-${number}`] 
          ? 'opacity-100 transform-none' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#7cff00]/10 flex items-center justify-center text-[#7cff00] font-bold text-xl">
          {number}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3 pl-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1 text-[#7cff00]">
              <ArrowRight size={16} />
            </div>
            <div className="text-gray-300">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DevelopmentPhasesSection: React.FC = () => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  const phases: PhaseProps[] = [
    {
      number: 1,
      title: "Core Development",
      items: [
        "Build and test monitoring modules for Telegram, Discord, and Twitter.",
        "Develop contract analysis Al for filtering potential gems.",
        "Implement a basic sniper bot with adjustable settings."
      ]
    },
    {
      number: 2,
      title: "Advanced Features",
      items: [
        "Introduce auto-sniping with customizable parameters.",
        "Improve Al filtering with machine learning models.",
        "Add real-time wallet tracking for whale movements."
      ],
      delay: 100
    },
    {
      number: 3,
      title: "Expansion & Monetization",
      items: [
        "Deploy multi-chain support (Ethereum, BSC, Solana, etc.).",
        "Launch a subscription-based service with different access levels.",
        "Partner with influencers and Web3 communities for adoption."
      ],
      delay: 200
    }
  ];
  
  return (
    <section id="development" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={(el) => registerElement('development-header', el)} 
          className={`text-center mb-16 transition-all duration-1000 ${
            animatedElements['development-header'] 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#7cff00] mb-4">Development Phases</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Our strategic approach to building Mercury AI's platform and ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <Phase key={phase.number} {...phase} />
          ))}
        </div>
        
        <div 
          ref={(el) => registerElement('development-conclusion', el)} 
          className={`mt-16 bg-[#0f0f0f] border border-[#7cff00]/20 rounded-xl p-8 text-center max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            animatedElements['development-conclusion'] 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
          <p className="text-lg text-gray-300">
            Mercury Al is built to revolutionize how traders and investors discover and capitalize on new token launches. By combining Al-driven insights, ultra-fast sniping, and multi-platform monitoring, the bot provides a competitive advantage in the ever-evolving crypto market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPhasesSection;