import React, { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky-header ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'} transition-all duration-300`}>
      {/* Top Navigation */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end py-2 text-sm">
            <div className="flex items-center space-x-6">
              {/* Social Media Icons */}
              <a
                href="https://instagram.com/riganusa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/riganusa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Contact Us */}
              <button
                onClick={scrollToFooter}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact Us
              </button>

              {/* Language Switcher */}
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <img
                    src={language === 'EN' ? '/api/placeholder/16/12?text=🇺🇸' : '/api/placeholder/16/12?text=🇮🇩'}
                    alt={language}
                    className="w-4 h-3 mr-2"
                  />
                  {language}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="dropdown-menu">
                  <button
                    onClick={() => setLanguage('EN')}
                    className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
                  >
                    <img src="/api/placeholder/16/12?text=🇺🇸" alt="EN" className="w-4 h-3 mr-2" />
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('ID')}
                    className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
                  >
                    <img src="/api/placeholder/16/12?text=🇮🇩" alt="ID" className="w-4 h-3 mr-2" />
                    Indonesia
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold font-serif text-blue-600">
              Riganusa
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            
            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <a href="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Our History
                </a>
                <a href="/about/vision-mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Our Vision & Mission
                </a>
                <a href="/about/leadership" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Our Leadership
                </a>
                <a href="/about/organization" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Organization Structure
                </a>
              </div>
            </div>

            {/* What We Do Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                What We Do
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <a href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Our Service
                </a>
                <a href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Our Product
                </a>
                <a href="/partners" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Our Partners
                </a>
                <a href="/market-customers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Market & Customers
                </a>
                <a href="/competitive-advantages" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Competitive Advantages
                </a>
              </div>
            </div>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Pages
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <a href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Blog
                </a>
                <a href="/galleries" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                  Galleries
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold font-serif text-white">Riganusa</span>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="space-y-4">
            <a href="/" className="block text-white hover:text-blue-300 transition-colors text-lg">
              Home
            </a>
            <div className="space-y-2">
              <p className="text-blue-300 font-semibold">About Us</p>
              <a href="/about/history" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Our History
              </a>
              <a href="/about/vision-mission" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Our Vision & Mission
              </a>
              <a href="/about/leadership" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Our Leadership
              </a>
              <a href="/about/organization" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Organization Structure
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-blue-300 font-semibold">What We Do</p>
              <a href="/services" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Our Service
              </a>
              <a href="/products" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Our Product
              </a>
              <a href="/partners" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Our Partners
              </a>
              <a href="/market-customers" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Market & Customers
              </a>
              <a href="/competitive-advantages" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Competitive Advantages
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-blue-300 font-semibold">Pages</p>
              <a href="/blog" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Blog
              </a>
              <a href="/galleries" className="block text-white hover:text-blue-300 transition-colors pl-4">
                Galleries
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}