import React from 'react';
import { Crosshair, Users, Briefcase, Check } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface AudienceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  delay?: number;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ id, icon, title, description, benefits, delay = 0 }) => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  return (
    <div 
      ref={(el) => registerElement(`audience-${id}`, el)}
      className={`bg-[#111111] border border-white/5 rounded-xl p-8 hover:border-[#7cff00]/20 transition-all duration-700 ${
        animatedElements[`audience-${id}`] 
          ? 'opacity-100 transform-none' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mb-6 bg-[#7cff00]/10 rounded-full flex items-center justify-center text-[#7cff00]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 text-gray-400">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={18} className="text-[#7cff00] mt-1" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AudienceSection: React.FC = () => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  const audienceCards: AudienceCardProps[] = [
    {
      id: "traders",
      icon: <Crosshair size={28} />,
      title: "Crypto Traders & Investors",
      description: "Looking for early entry into promising projects.",
      benefits: [
        "Early entry opportunities",
        "Promising project identification",
        "Risk mitigation with AI filtering"
      ]
    },
    {
      id: "snipers",
      icon: <Users size={28} />,
      title: "Sniper Bot Users",
      description: "Seeking an edge in token launches.",
      benefits: [
        "Ultra-fast execution",
        "Automated purchase on launch",
        "Customizable parameters"
      ],
      delay: 100
    },
    {
      id: "communities",
      icon: <Briefcase size={28} />,
      title: "Web3 Communities",
      description: "Alpha groups wanting automated contract alerts.",
      benefits: [
        "Multi-platform monitoring",
        "Automated contract alerts",
        "Community-based insights"
      ],
      delay: 200
    }
  ];
  
  return (
    <section id="audience" className="py-24 relative bg-[#0a0a0a]/50">
      <div className="container mx-auto px-6">
        <div 
          ref={(el) => registerElement('audience-header', el)} 
          className={`text-center mb-16 transition-all duration-1000 ${
            animatedElements['audience-header'] 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#7cff00] mb-4">Who Is Mercury AI For?</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Our platform is designed for a variety of crypto enthusiasts, from beginners to professional traders.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceCards.map((card) => (
            <AudienceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
