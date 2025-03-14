import React, { useState, useEffect } from 'react';
import { Book, MessageCircle } from 'lucide-react';
import { useLocation, Link } from 'wouter';

interface NavItem {
  id: string;
  title: string;
}

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [location] = useLocation();
  const isHomePage = location === '/';
  
  const navItems: NavItem[] = [
    { id: 'features', title: 'features' },
    { id: 'audience', title: 'audience' },
    { id: 'business', title: 'business' },
    { id: 'development-phases', title: 'development phases' }
  ];

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
        
        // Determine active section for nav highlighting
        const sections = ['hero', 'features', 'audience', 'business', 'development-phases'];
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 100) {
            setActiveSection(section);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrollPosition(100); // Force header background on non-home pages
    }
  }, [isHomePage]);
  
  const navigateTo = (id: string) => {
    setMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrollPosition > 50 ? 'bg-black/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7cff00] to-[#65cc00] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">M</div>
              <h1 className="text-2xl font-bold text-white">
                <span className="text-[#7cff00]">Mercury</span> AI
              </h1>
            </a>
          </Link>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden text-white focus:outline-none z-20"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
          
          <nav className={`lg:block ${menuOpen ? 'fixed inset-0 pt-20 px-6 bg-black/95 backdrop-blur-lg z-10' : 'hidden'}`}>
            <ul className={`flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-10 ${menuOpen ? 'text-center' : ''}`}>
              {navItems.map((item) => (
                <li key={item.id} className="w-full lg:w-auto">
                  <button 
                    onClick={() => navigateTo(item.id)}
                    className={`capitalize font-medium transition-all duration-300 hover:text-[#7cff00] relative 
                      ${activeSection === item.id ? 'text-[#7cff00]' : 'text-white'} w-full lg:w-auto py-3 lg:py-0`}
                  >
                    {item.title}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#7cff00] transform scale-x-0 transition-transform duration-300 origin-left ${activeSection === item.id ? 'scale-x-100' : ''}`}></span>
                  </button>
                </li>
              ))}
              <li className="w-full lg:w-auto">
                <a 
                  href="https://docs.example.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-medium hover:text-[#7cff00] transition-all duration-300 flex items-center justify-center lg:justify-start gap-1 py-3 lg:py-0"
                >
                  <Book size={16} />
                  <span>Docs</span>
                </a>
              </li>
              <li className="w-full lg:w-auto">
                <a 
                  href="https://community.example.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-medium hover:text-[#7cff00] transition-all duration-300 flex items-center justify-center lg:justify-start gap-1 py-3 lg:py-0"
                >
                  <MessageCircle size={16} />
                  <span>Community</span>
                </a>
              </li>
              <li className="w-full lg:w-auto mt-4 lg:mt-0">
                <button className="bg-[#7cff00] text-black rounded-md px-5 py-2 font-medium hover:bg-[#65cc00] transition-all duration-300 w-full lg:w-auto">
                  Early Access
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
