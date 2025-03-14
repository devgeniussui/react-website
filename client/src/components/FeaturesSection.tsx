import React from 'react';
import { 
  Satellite, Brain, Bot, Bell, Gauge, Link2, 
  CheckCircle
} from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface FeatureCardProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ id, icon, title, description, features, delay = 0 }) => {
  const { animatedElements, registerElement } = useScrollAnimation();
  const elementId = `feature-${id}`;

  return (
    <div 
      ref={(el) => registerElement(elementId, el)}
      className={`bg-[#222222]/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 transition-all duration-700 hover:border-[#7cff00]/20 hover:bg-[#222222]/80 ${
        animatedElements[elementId]
          ? 'opacity-100 transform-none' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 mb-6 bg-[#7cff00]/10 rounded-lg flex items-center justify-center text-[#7cff00]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2 text-sm text-gray-400">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#7cff00]" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  const features: FeatureCardProps[] = [
    {
      id: 1,
      icon: <Satellite size={24} />,
      title: "Real-time Monitoring",
      description: "Scans Telegram, Discord, Twitter, and DMs for newly launched token contracts.",
      features: [
        "Telegram channel monitoring",
        "Discord server integration",
        "Twitter feed analysis",
        "Direct messages scanning"
      ]
    },
    {
      id: 2,
      icon: <Brain size={24} />,
      title: "AI-Powered Analysis",
      description: "Uses AI to assess token potential, filtering out scams and highlighting promising projects.",
      features: [
        "Token potential assessment",
        "Scam filtering technology",
        "Gem project identification"
      ],
      delay: 100
    },
    {
      id: 3,
      icon: <Bot size={24} />,
      title: "Sniper Bot Functionality",
      description: "Enables users to automatically buy tokens the moment they launch.",
      features: [
        "Automatic token purchase",
        "Launch-timed execution",
        "Configurable buy parameters"
      ],
      delay: 200
    },
    {
      id: 4,
      icon: <Bell size={24} />,
      title: "Customizable Alerts",
      description: "Users can set filters for specific keywords, dev wallets, and contract types.",
      features: [
        "Keyword filtering",
        "Dev wallet tracking",
        "Contract type identification"
      ],
      delay: 300
    },
    {
      id: 5,
      icon: <Gauge size={24} />,
      title: "Speed Optimization",
      description: "Ensures ultra-fast transaction execution to secure early entry.",
      features: [
        "Transaction execution optimization",
        "Early entry capability",
        "Minimal delay technology"
      ],
      delay: 400
    },
    {
      id: 6,
      icon: <Link2 size={24} />,
      title: "Multi-Chain Support",
      description: "Works across Ethereum, BSC, Solana, and other EVM-compatible chains.",
      features: [
        "Ethereum network",
        "Binance Smart Chain",
        "Solana & EVM-compatible chains"
      ],
      delay: 500
    }
  ];
  
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={(el) => registerElement('features-header', el)} 
          className={`text-center mb-16 transition-all duration-1000 ${
            animatedElements['features-header'] 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#7cff00] mb-4">Key Features</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Advanced tools designed to give you the edge in crypto trading with powerful AI assistance and real-time monitoring.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
