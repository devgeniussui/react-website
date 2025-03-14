import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface RoadmapItemProps {
  id: string;
  date: string;
  title: string;
  milestones: string[];
  isRight?: boolean;
  isActive?: boolean;
  delay?: number;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ 
  id, 
  date, 
  title, 
  milestones, 
  isRight = false,
  isActive = true,
  delay = 0 
}) => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  return (
    <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div 
        ref={(el) => registerElement(`roadmap-${id}`, el)}
        className={`${isRight ? 'md:order-2 md:pl-16' : 'md:text-right md:pr-16'} transition-all duration-700 ${
          animatedElements[`roadmap-${id}`] 
            ? 'opacity-100 transform-none' 
            : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className={`bg-[#7cff00] ${isActive ? '' : 'opacity-70'} text-black font-bold py-1 px-4 rounded-full inline-block mb-4`}>
          {date}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <ul className={`space-y-2 text-gray-400 list-disc ml-5 ${isRight ? '' : 'md:ml-0 md:list-none'}`}>
          {milestones.map((milestone, index) => (
            <li key={index}>{milestone}</li>
          ))}
        </ul>
      </div>
      <div className={`${isRight ? 'md:order-1' : ''} hidden md:block`}></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-6 h-6 bg-[#7cff00] rounded-full border-4 border-[#111111] z-10"></div>
    </div>
  );
};

const RoadmapSection: React.FC = () => {
  const { animatedElements, registerElement } = useScrollAnimation();
  
  const roadmapItems: RoadmapItemProps[] = [
    {
      id: "q2-2024",
      date: "Q2 2024",
      title: "Beta Launch",
      milestones: [
        "Private beta for select users",
        "Core monitoring & sniper functionality",
        "Initial AI analysis implementation",
        "Comprehensive security audits"
      ],
      isActive: true
    },
    {
      id: "q3-2024",
      date: "Q3 2024",
      title: "Public Launch",
      milestones: [
        "Full public release",
        "Multi-chain support integration",
        "Advanced filtering capabilities",
        "Mobile application deployment"
      ],
      isRight: true
    },
    {
      id: "q4-2024",
      date: "Q4 2024",
      title: "Feature Enhancement",
      milestones: [
        "Enhanced AI prediction algorithms",
        "Additional supported platforms",
        "API for third-party integration",
        "Web3 community tools"
      ]
    },
    {
      id: "q1-2025",
      date: "Q1 2025",
      title: "Premium Tools",
      milestones: [
        "Professional trading dashboard",
        "Advanced sniper configuration options",
        "Institutional-grade analytics",
        "Expanded partnership program"
      ],
      isRight: true
    },
    {
      id: "q2-2025",
      date: "Q2 2025",
      title: "Ecosystem Expansion",
      milestones: [
        "Decentralized AI analytics platform",
        "Cross-chain arbitrage capabilities",
        "Advanced trading algorithm creator",
        "Mercury AI token & governance"
      ]
    }
  ];
  
  return (
    <section id="roadmap" className="py-24 relative bg-[#0a0a0a]/50">
      <div className="container mx-auto px-6">
        <div 
          ref={(el) => registerElement('roadmap-header', el)} 
          className={`text-center mb-16 transition-all duration-1000 ${
            animatedElements['roadmap-header'] 
              ? 'opacity-100 transform-none' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#7cff00] mb-4">Development Roadmap</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Our vision for Mercury AI includes continuous improvement and expansion of features.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#7cff00]/20 transform md:-translate-x-1/2"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <RoadmapItem 
                key={item.id} 
                {...item} 
                delay={index * 100} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
