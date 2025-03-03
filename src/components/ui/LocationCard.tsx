
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface LocationCardProps {
  city: string;
  country: string;
  address: string;
  postalCode?: string;
  phone: string;
  email: string;
  delay?: number;
}

const LocationCard = ({
  city,
  country,
  address,
  postalCode,
  phone,
  email,
  delay = 0
}: LocationCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover-lift transition-all duration-500 ease-out-expo ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="h-36 bg-company-blue relative">
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-company-midnight to-transparent">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <MapPin size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{city}</h3>
              <p className="text-gray-200">{country}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin size={18} className="text-company-blue mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">
              {address}
              {postalCode && <span>, {postalCode}</span>}
            </p>
          </div>
          
          <div className="flex items-center">
            <Phone size={18} className="text-company-blue mr-3 flex-shrink-0" />
            <a 
              href={`tel:${phone.replace(/\s/g, '')}`} 
              className="text-gray-700 hover:text-company-blue transition-colors"
            >
              {phone}
            </a>
          </div>
          
          <div className="flex items-center">
            <Mail size={18} className="text-company-blue mr-3 flex-shrink-0" />
            <a 
              href={`mailto:${email}`} 
              className="text-gray-700 hover:text-company-blue transition-colors"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
