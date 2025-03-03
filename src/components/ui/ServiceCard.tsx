
import { LucideIcon } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) => {
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
      className={`bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover-lift transition-all duration-500 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
    >
      <div className="mb-6 p-4 bg-company-lightBlue rounded-lg inline-block">
        <Icon size={28} className="text-company-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-company-midnight">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a 
        href="#" 
        className="inline-flex items-center mt-6 text-company-blue font-medium hover:text-company-midnight transition-colors"
      >
        En savoir plus
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default ServiceCard;
