import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo-desktop.png";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Configuration mapping layout matching page routes
  const navItems = [
    { id: 'home', label: 'ГЛАВНАЯ', path: '/' },
    { id: 'catalog', label: 'КАТАЛОГ ПРОДУКЦИИ', path: '/catalog' },
    { id: 'program', label: 'ПОДБОР ПРОГРАММЫ', path: '/program' },
  ];

  return (
    <div className="w-full bg-white font-oswald md:bg-transparent">
      {/* Header Container */}
      <header className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between md:px-12 md:py-6 lg:px-24">
        
        {/* Logo Brand Frame linking back home */}
        <NavLink to="/" className="flex items-center gap-3 z-20">
          <img src={logo} alt="CatEnergy Logo" className="h-10 w-auto object-contain" />
        </NavLink>

        {/* Desktop Navigation Menu (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-12 z-20">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `
                text-sm font-medium tracking-wider transition-all duration-200 uppercase font-[Oswald] pb-1 border-b-2
                ${isActive 
                  ? 'text-black border-black md:text-black lg:border-black' 
                  : 'text-neutral-600 border-transparent hover:text-black'
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Trigger Button (hidden on desktop) */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-30 md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span className={`h-0.5 w-6 bg-black transition-transform duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-black transition-opacity duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-black transition-transform duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Sidebar Overlay (hidden on desktop) */}
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-20 md:hidden
            ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsSidebarOpen(false)}
        >
          {/* Sidebar Drawer Panel */}
          <div 
            className={`absolute top-0 right-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col gap-6 pt-24 transform transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            onClick={(e) => e.stopPropagation()} // Prevent closing when tapping inside side nav drawer
          >
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)} // Safely drop screen modal state on navigate
                className={({ isActive }) => `
                  text-left text-lg font-medium tracking-wide transition-colors duration-200 uppercase font-[Oswald] py-2 border-b border-gray-100
                  ${isActive 
                    ? 'text-[#63b843] border-[#63b843]' 
                    : 'text-neutral-700 hover:text-black'
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

      </header>
    </div>
  );
}

export default Header;