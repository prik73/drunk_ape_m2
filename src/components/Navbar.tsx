"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon, Zap, ChevronRight, Cpu, GitBranch, Globe, Clock} from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DashboardBtn from "./DashboardBtn";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md" : "bg-white dark:bg-slate-900"
    }`}>
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo with particle effect */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono relative group"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-10 h-10 bg-emerald-500/20 rounded-full group-hover:scale-[1.5] transition-all duration-500 animate-pulse"></div>
            <CodeIcon className="size-8 text-emerald-500 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <Zap className="absolute size-3 text-yellow-400 -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce" />
          </div>
          <div className="relative">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-bold">
              Code-Collab
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </div>
        </Link>

        {/* Center nav items with animations */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/50 rounded-full px-1 py-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={index} 
                  href={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-300 ${
                    hoveredItem === index ? "bg-white dark:bg-slate-700 shadow-sm" : "hover:bg-white/50 dark:hover:bg-slate-800"
                  }`}>
                    <Icon className={`size-4 ${
                      hoveredItem === index ? "text-emerald-500" : "text-slate-500"
                    } transition-colors duration-300`} />
                    <span className={`${
                      hoveredItem === index ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"
                    } font-medium transition-colors duration-300`}>
                      {item.name}
                    </span>
                    
                    {/* Animated dot indicator */}
                    {hoveredItem === index && (
                      <span className="absolute left-2 -bottom-3 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side with animated border */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardBtn />
            
            <div className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <ModeToggle />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 opacity-80 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-300 animate-spin-slow"></div>
              <div className="relative p-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-500">
                <div className="bg-white dark:bg-slate-900 rounded-full p-0.5">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </div>
          </div>
        </SignedIn>
      </div>
      
      {/* Animated bottom border */}
      <div className="h-0.5 w-full bg-gradient-to-r from-slate-200 via-emerald-500 to-slate-200 dark:from-slate-800 dark:via-emerald-500 dark:to-slate-800 opacity-30"></div>
    </nav>
  );
}

// Add this to your globals.css
// @keyframes spin-slow {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// .animate-spin-slow {
//   animation: spin-slow 8s linear infinite;
// }

export default Navbar;