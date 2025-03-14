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
      title: "Multi-Platform Monitoring",
      description: "Track new token launches across Telegram, Discord, and Twitter in real-time with our advanced monitoring system.",
      features: [
        "Telegram channel monitoring",
        "Discord server integration",
        "Twitter feed analysis"
      ]
    },
    {
      id: 2,
      icon: <Brain size={24} />,
      title: "AI-Powered Analysis",
      description: "Our advanced AI algorithms analyze token metrics and provide insights into potential opportunities and risks.",
      features: [
        "Predictive analytics",
        "Risk assessment scores",
        "Smart liquidity tracking"
      ],
      delay: 100
    },
    {
      id: 3,
      icon: <Bot size={24} />,
      title: "Automated Sniper Bot",
      description: "Lightning-fast execution of trades based on your predefined criteria with customizable parameters.",
      features: [
        "Sub-second transaction speed",
        "Custom gas settings",
        "Auto buy/sell configurations"
      ],
      delay: 200
    },
    {
      id: 4,
      icon: <Bell size={24} />,
      title: "Real-Time Alerts",
      description: "Receive instant notifications across multiple platforms when new opportunities arise or market conditions change.",
      features: [
        "Telegram notifications",
        "Email alerts",
        "In-app messaging system"
      ],
      delay: 300
    },
    {
      id: 5,
      icon: <Gauge size={24} />,
      title: "Performance Dashboard",
      description: "Comprehensive analytics dashboard to track your trading performance and bot activity.",
      features: [
        "Portfolio performance tracking",
        "Historical trade analysis",
        "Bot performance metrics"
      ],
      delay: 400
    },
    {
      id: 6,
      icon: <Link2 size={24} />,
      title: "Multi-Chain Support",
      description: "Track and trade across multiple blockchain networks with seamless integration.",
      features: [
        "Ethereum network",
        "Binance Smart Chain",
        "Solana, Polygon, Avalanche"
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
