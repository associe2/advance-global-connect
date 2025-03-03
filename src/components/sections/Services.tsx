
import { useEffect, useState, useRef } from 'react';
import ServiceCard from '../ui/ServiceCard';
import { FileSearch, Users, Scale, Calculator } from 'lucide-react';

const Services = () => {
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
    <section id="services" className="py-24 bg-company-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="text-company-blue font-medium inline-block mb-2">NOTRE EXPERTISE</span>
            <h2 className="section-title">Nos Solutions sur Mesure</h2>
            <p className="section-subtitle">
              Nos services sont conçus pour répondre précisément à vos besoins en matière de financement et d'investissement international.
            </p>
          </div>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={FileSearch}
            title="Assistance à la Recherche de Financement"
            description="Analyse financière, élaboration de Business Plan, montage de dossiers et suivi des demandes de financement."
            delay={100}
          />
          
          <ServiceCard
            icon={Users}
            title="Accompagnement des Investisseurs Étrangers"
            description="Facilitation administrative, accueil personnalisé et suivi de contrats pour vos investissements internationaux."
            delay={200}
          />
          
          <ServiceCard
            icon={Scale}
            title="Fiscalité et Services Juridiques"
            description="Déclarations fiscales, conseils juridiques et rédaction de statuts adaptés à votre structure et vos besoins."
            delay={300}
          />
          
          <ServiceCard
            icon={Calculator}
            title="Gestion Comptable"
            description="Gestion des inventaires, travaux de fin d'exercice et suivi comptable régulier de votre activité."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
