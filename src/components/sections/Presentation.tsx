
import { useEffect, useState, useRef } from 'react';
import ProfessionalGallery from '../ui/ProfessionalGallery';

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
        threshold: 0.1,
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

  return (
    <section id="presentation" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-12">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
               style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}>
            <span className="text-company-blue font-medium inline-block mb-2">QUI SOMMES-NOUS</span>
            <h2 className="section-title">Advance Group International : Expertise et Confiance</h2>
            <p className="section-subtitle">
              Intermédiaire financier spécialisé dans l'accompagnement des entreprises et investisseurs internationaux, 
              nous facilitons vos démarches entre l'Afrique et l'Europe avec une équipe expérimentée et multiculturelle.
            </p>
          </div>
        </div>
        
        {/* Gallery of professional images */}
        <ProfessionalGallery />
        
        <div className="flex justify-center mt-8">
          <a 
            href="#services" 
            className="btn-primary flex items-center"
          >
            Découvrez nos services
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
