
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-company-blue font-display font-bold text-2xl">
            AGI
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="nav-link">Accueil</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('locations')} className="nav-link">Zones d'Intervention</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">À Propos</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-company-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="nav-link py-2 text-left">Accueil</button>
            <button onClick={() => scrollToSection('services')} className="nav-link py-2 text-left">Services</button>
            <button onClick={() => scrollToSection('locations')} className="nav-link py-2 text-left">Zones d'Intervention</button>
            <button onClick={() => scrollToSection('about')} className="nav-link py-2 text-left">À Propos</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link py-2 text-left">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
