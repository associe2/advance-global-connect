
import { useEffect, useState, useRef } from 'react';

const About = () => {
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

  const values = [
    {
      title: "Professionnalisme",
      description: "Nous respectons les plus hauts standards de professionnalisme dans toutes nos interactions et prestations."
    },
    {
      title: "Confidentialité",
      description: "Nous garantissons une confidentialité absolue de toutes les informations que vous nous confiez."
    },
    {
      title: "Expertise Multiculturelle",
      description: "Notre équipe internationale comprend les nuances culturelles et réglementaires des marchés où nous opérons."
    }
  ];

  return (
    <section id="about" className="py-24 bg-company-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <div className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
              <span className="text-company-blue font-medium inline-block mb-2">À PROPOS DE NOUS</span>
              <h2 className="section-title">Notre Engagement</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fondé en 2015, Advance Group International est né de la vision d'offrir aux entrepreneurs et investisseurs 
                un accompagnement sur mesure pour leurs projets internationaux, en particulier entre l'Afrique et l'Europe.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre équipe d'experts en finance, droit et gestion d'entreprise met à votre disposition son réseau et son 
                savoir-faire pour vous aider à concrétiser vos ambitions d'expansion et de développement.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div ref={sectionRef} className="lg:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-700 ease-out-expo delay-${index * 100} ${
                    isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-3 text-company-midnight">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
