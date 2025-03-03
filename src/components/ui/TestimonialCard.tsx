
import { useEffect, useState, useRef } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  delay?: number;
}

const TestimonialCard = ({ quote, author, role, company, delay = 0 }: TestimonialCardProps) => {
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
      className={`bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative transition-all duration-500 ease-out-expo hover-lift ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
      }`}
    >
      <Quote size={40} className="text-company-lightBlue absolute -top-4 -left-4" />
      
      <div className="pt-6">
        <p className="text-gray-700 mb-6 leading-relaxed italic">"{quote}"</p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-company-blue rounded-full flex items-center justify-center text-white font-semibold">
            {author.split(' ').map(name => name[0]).join('')}
          </div>
          
          <div className="ml-4">
            <h4 className="font-semibold text-company-midnight">{author}</h4>
            {(role || company) && (
              <p className="text-gray-500 text-sm">
                {role && <span>{role}</span>}
                {role && company && <span> • </span>}
                {company && <span>{company}</span>}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
