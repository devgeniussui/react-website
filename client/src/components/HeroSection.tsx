import React, { useState, useRef } from 'react';
import { Clock, Activity, RotateCcw, ChevronDown, Zap } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import VideoPlayer from './VideoPlayer';

const HeroSection: React.FC = () => {
  const { animatedElements, registerElement } = useScrollAnimation();
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  
  const scrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
      setShowVideo(true);
      // Add a small delay to start the video after scrolling
      setTimeout(() => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
          videoElement.play();
        }
      }, 700);
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-28 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#131313] to-[#0a0a0a]"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div 
              ref={(el) => registerElement('hero-badge', el)} 
              className={`inline-block px-4 py-1 bg-[#7cff00]/10 border border-[#7cff00]/20 rounded-full text-[#7cff00] text-sm font-medium transition-all duration-700 ${
                animatedElements['hero-badge'] 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              Next-Gen Crypto Trading
            </div>
            
            <h1 
              ref={(el) => registerElement('hero-title', el)} 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 delay-100 ${
                animatedElements['hero-title'] 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              <span className="block">Advanced</span> 
              <span className="text-[#7cff00] font-extrabold">CA Monitor</span> & 
              <span className="text-[#7cff00] font-extrabold"> Sniper Bot</span>
            </h1>
            
            <p 
              ref={(el) => registerElement('hero-desc', el)} 
              className={`text-lg text-gray-300 max-w-lg transition-all duration-700 delay-200 ${
                animatedElements['hero-desc'] 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              Mercury Al is an advanced CA (Contract Address) Monitor & Sniper Bot designed to track and analyze new token launches across multiple platforms, including Telegram channels, direct messages (DMs), Discord servers, and Twitter accounts. The bot helps traders and investors identify high-potential tokens early, giving them an edge in the fast-paced crypto market.
            </p>
            
            <div 
              ref={(el) => registerElement('hero-cta', el)} 
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                animatedElements['hero-cta'] 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              <button className="px-8 py-3 bg-[#7cff00] text-black rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg">
                Get Early Access
              </button>
              <button 
                onClick={scrollToVideo}
                className="px-8 py-3 bg-transparent border border-[#7cff00] text-[#7cff00] rounded-lg font-semibold transition-all hover:bg-[#7cff00]/10">
                Watch Demo
              </button>
            </div>
            
            <div 
              ref={(el) => registerElement('hero-stats', el)} 
              className={`flex flex-wrap items-center gap-4 pt-6 transition-all duration-700 delay-400 ${
                animatedElements['hero-stats'] 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              <div className="bg-[#222222] rounded-lg px-4 py-2 text-sm text-gray-400 flex items-center gap-2">
                <Clock size={16} className="text-[#7cff00]" />
                <span>Lightning Fast Response</span>
              </div>
              <div className="bg-[#222222] rounded-lg px-4 py-2 text-sm text-gray-400 flex items-center gap-2">
                <Activity size={16} className="text-[#7cff00]" />
                <span>AI-Powered Insights</span>
              </div>
              <div className="bg-[#222222] rounded-lg px-4 py-2 text-sm text-gray-400 flex items-center gap-2">
                <RotateCcw size={16} className="text-[#7cff00]" />
                <span>24/7 Monitoring</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div 
              ref={(el) => registerElement('hero-dashboard', el)} 
              className={`relative transition-all duration-1000 delay-300 ${
                animatedElements['hero-dashboard'] 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="bg-[#222222] rounded-2xl p-6 backdrop-blur-sm border border-white/5 shadow-xl relative z-10">
                <div className="bg-[#111111] rounded-xl overflow-hidden mb-6">
                  <div className="flex items-center justify-between p-4 border-b border-white/5">
                    <div className="text-[#7cff00] font-semibold flex items-center gap-2">
                      <Zap size={18} />
                      Video Demo
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 bg-[#7cff00] rounded-full animate-pulse"></div>
                      Preview
                    </div>
                  </div>
                  <div 
                    ref={videoRef}
                    className="flex items-center justify-center bg-[#0a0a0a] text-center"
                  >
                    <VideoPlayer
                      videoSrc="/videos/MercuryVideo.mp4"
                      className="w-full h-60"
                    />
                  </div>
                  <div className="p-4 flex justify-between border-t border-white/5">
                    <button className="px-3 py-1 rounded text-xs border border-[#7cff00]/40 text-[#7cff00] bg-[#7cff00]/5 hover:bg-[#7cff00]/10 transition-colors">
                      Watch Tutorial
                    </button>
                    <button className="px-3 py-1 rounded text-xs bg-[#7cff00] text-black hover:bg-[#65cc00] transition-colors font-medium">
                      Snipe Token
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-400 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#7cff00]"></div>
                    <span>Ultra-fast transaction execution</span>
                  </div>
                  <button className="text-[#7cff00] hover:underline">Learn more</button>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#7cff00]/10 blur-xl rounded-full"></div>
              <div className="absolute -z-20 -top-4 -left-4 w-2/3 h-2/3 bg-[#7cff00]/5 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a 
          href="#features" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }} 
          className="text-white opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
