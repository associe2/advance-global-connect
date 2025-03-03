
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 31, 63, 0.9)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-all duration-1000 ease-out-expo transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-display mb-6">
              Votre partenaire stratégique en financement et investissement international
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ease-out-expo transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl text-gray-100 mb-10 max-w-2xl">
              Advance Group International vous accompagne dans vos démarches de financement et d'investissement à l'international, avec une expertise particulière en Afrique et en Europe.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ease-out-expo transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={scrollToContact}
              className="bg-white text-company-blue px-8 py-4 rounded-md font-semibold hover:bg-company-blue hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center group"
            >
              Contactez-nous
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              Nos services
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-16 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-slide-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
