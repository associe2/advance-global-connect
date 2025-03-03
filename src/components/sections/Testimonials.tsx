
import { useEffect, useState, useRef } from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="text-company-blue font-medium inline-block mb-2">TÉMOIGNAGES</span>
            <h2 className="section-title">Ils nous ont fait confiance</h2>
            <p className="section-subtitle">
              Découvrez les retours d'expérience de nos clients qui ont bénéficié de notre expertise 
              en matière de financement et d'investissement international.
            </p>
          </div>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Grâce à AGI, nous avons obtenu un financement en seulement 3 mois pour notre projet d'expansion au Gabon. Leur expertise et leur réseau ont fait toute la différence."
            author="Martin Dupont"
            role="Directeur Général"
            company="Innovatech SARL"
            delay={100}
          />
          
          <TestimonialCard 
            quote="L'accompagnement d'Advance Group a été décisif pour notre implantation en Afrique. Leur connaissance du terrain et des procédures administratives nous a fait gagner un temps précieux."
            author="Sophie Laurent"
            role="Responsable Développement"
            company="Global Invest"
            delay={200}
          />
          
          <TestimonialCard 
            quote="Je recommande vivement les services de AGI pour la qualité de leur suivi et leur professionnalisme. Ils ont su nous conseiller efficacement sur les aspects juridiques et fiscaux de notre investissement."
            author="Jean-Claude Mbarga"
            role="Entrepreneur"
            company="Tech Solutions Cameroun"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
