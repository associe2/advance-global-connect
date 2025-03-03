
import { useEffect, useState, useRef } from 'react';
import LocationCard from '../ui/LocationCard';
import { Globe } from 'lucide-react';

const Locations = () => {
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
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ease-out-expo ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <span className="text-company-blue font-medium inline-block mb-2">PRÉSENCE INTERNATIONALE</span>
            <h2 className="section-title">Présents au Gabon, en France et au Cameroun</h2>
            <p className="section-subtitle">
              Notre présence internationale nous permet de vous offrir un service de proximité et une expertise locale dans chacun de nos marchés.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10">
            <Globe size={400} className="text-company-blue" />
          </div>

          <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <LocationCard
              city="Libreville"
              country="Gabon"
              address="Quartier Glass, Boulevard du Bord de Mer"
              postalCode="BP 2345"
              phone="+241 07 724 86 66"
              email="advancegroupinternational@gmail.com"
              delay={100}
            />
            
            <LocationCard
              city="Paris"
              country="France"
              address="75 Avenue des Champs-Élysées"
              postalCode="75008"
              phone="+33 1 23 45 67 89"
              email="advancegroupinternational@gmail.com"
              delay={200}
            />
            
            <LocationCard
              city="Douala"
              country="Cameroun"
              address="Quartier Bonanjo, Rue de la Joie"
              postalCode="BP 4567"
              phone="+237 6 12 34 56 78"
              email="advancegroupinternational@gmail.com"
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
