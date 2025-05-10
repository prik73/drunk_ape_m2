"use client"
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { 
  CodeIcon, 
  Zap, 
  ChevronRight, 
  Cpu, 
  GitBranch, 
  Globe, 
  Clock,
  Terminal
} from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DashboardBtn from "./DashboardBtn";

// For ThreeJS background
function ParticleBackground({ isDarkMode }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-slate-900/90' : 'bg-white/90'} z-10`}></div>
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className={`
              absolute rounded-full ${i % 3 === 0 ? 'bg-emerald-500' : i % 3 === 1 ? 'bg-teal-500' : 'bg-cyan-500'}
              opacity-20 animate-float
            `}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

// Loading animation
function LoadingSpinner() {
  return (
    <div className="w-6 h-6 border-2 border-t-emerald-500 border-r-transparent border-b-teal-500 border-l-transparent rounded-full animate-spin"></div>
  );
}

// NavItem component with animated hover effects
function NavItem({ icon: Icon, name, href, isActive }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      href={href}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
        ${isActive || isHovered ? 
          'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20' : 
          'hover:bg-slate-100 dark:hover:bg-slate-800/50'
        }
      `}>
        <Icon className={`
          size-4 transition-all duration-300
          ${isActive || isHovered ? 'text-emerald-500 scale-110' : 'text-slate-500'}
        `} />
        
        <span className={`
          whitespace-nowrap transition-all duration-300
          ${isActive || isHovered ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-600 dark:text-slate-300'}
        `}>
          {name}
        </span>
        
        {/* Line animation on hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 rounded-full"
          style={{
            width: isHovered ? '80%' : '0%',
            opacity: isHovered ? 1 : 0
          }}
        ></div>
      </div>
    </Link>
  );
}

// CodeBlock component for the animated coding indicator
function CodeBlock() {
  const [text, setText] = useState("");
  const codeSnippets = [
    "const connect = async() => {",
    "  await collab.init();",
    "  return status.OK;",
    "}",
  ];
  
  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const line = codeSnippets[currentLine];
      
      if (isDeleting) {
        setText(text => text.substring(0, text.length - 1));
        typingSpeed = 50;
        
        if (text.length === 0) {
          isDeleting = false;
          currentLine = (currentLine + 1) % codeSnippets.length;
          typingSpeed = 500; // Pause before typing next line
        }
      } else {
        setText(line.substring(0, currentChar + 1));
        currentChar++;
        
        if (currentChar === line.length) {
          isDeleting = true;
          typingSpeed = 2000; // Wait before deleting
          currentChar = 0;
        }
      }
    };
    
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [text]);
  
  return (
    <div className="hidden lg:flex h-8 items-center px-3 py-1 bg-slate-100 dark:bg-slate-800/50 rounded-md font-mono text-sm text-slate-600 dark:text-slate-300 overflow-x-hidden whitespace-nowrap">
      <Terminal className="size-3.5 mr-2 text-emerald-500" />
      <span>{text}</span>
      <span className="inline-block w-1.5 h-4 bg-emerald-500 ml-0.5 animate-pulse"></span>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activePage, setActivePage] = useState(0);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Check dark mode
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    // For demo: detect active page based on URL
    const path = window.location.pathname;
    const navItems = ["/features", "/projects", "/community", "/updates"];
    const activeIndex = navItems.findIndex(item => path === item);
    if (activeIndex !== -1) setActivePage(activeIndex);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items for the center space
  const navItems = [
    { name: "Features", icon: Cpu, href: "/features" },
    { name: "Projects", icon: GitBranch, href: "/projects" },
    { name: "Community", icon: Globe, href: "/community" },
    { name: "Updates", icon: Clock, href: "/updates" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? "h-16 shadow-md" : "h-20"
    }`}>
      {/* Animated background */}
      <ParticleBackground isDarkMode={isDarkMode} />
      
      <div className="relative z-20 flex h-full items-center px-4 container mx-auto">
        {/* Logo with particle effect */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono relative group"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-10 h-10 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full group-hover:scale-[1.8] transition-all duration-700 animate-pulse"></div>
            <CodeIcon className="size-8 text-emerald-500 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <Zap className="absolute size-3 text-yellow-400 -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce" />
          </div>
          <div className="relative">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-bold">
              Code-Collab
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </div>
        </Link>

        {/* Animated code block */}
        <div className="ml-4 mr-8">
          <Suspense fallback={<LoadingSpinner />}>
            <CodeBlock />
          </Suspense>
        </div>

        {/* Center nav items with animations */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="flex items-center gap-2">
            {navItems.map((item, index) => (
              <NavItem 
                key={index}
                icon={item.icon}
                name={item.name}
                href={item.href}
                isActive={activePage === index}
              />
            ))}
          </div>
        </div>

        {/* Right side with animated effects */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <div className="relative">
              <DashboardBtn />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>
            
            <div className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <ModeToggle />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 opacity-80 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-300 animate-spin-slow"></div>
              <div className="relative p-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500">
                <div className="bg-white dark:bg-slate-900 rounded-full p-0.5">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </div>
          </div>
        </SignedIn>
      </div>
      
      {/* Animated bottom border that moves on scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          style={{
            width: '30%',
            transform: `translateX(${scrolled ? '150%' : '-50%'})`,
            transition: 'transform 1.5s ease-in-out'
          }}
        ></div>
      </div>
    </nav>
  );
}



export default Navbar;