
import { useEffect, useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-company-midnight font-display">
              Advance Group International : Expertise et Confiance
            </h2>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Intermédiaire financier spécialisé dans l'accompagnement des entreprises et investisseurs internationaux, 
              nous mettons notre expertise au service de vos projets pour vous aider à atteindre vos objectifs.
            </p>
          </div>
          
          <div className={`transition-all duration-700 delay-400 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 opacity-0 translate-y-10'}`}>
            <button 
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 bg-company-blue text-white px-8 py-3 rounded-md font-medium hover:bg-company-midnight transition-all duration-300 shadow-md group"
            >
              Découvrez nos services
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
