import { Card } from './ui/card';
import { Zap, HeadphonesIcon, CreditCard } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function KeyBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Instant Work',
      description: 'Auto-matched projects delivered to you the moment they post. Apply or grab instantly.',
      gradient: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1593956396019-a25a6a92f57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwbGlnaHRuaW5nJTIwc3BlZWR8ZW58MXx8fHwxNzYyODYwODU0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Help',
      description: 'Live support and a vendor success team available around the clock.',
      gradient: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0fGVufDF8fHx8MTc2Mjg2MDg1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: CreditCard,
      title: 'Weekly Payments',
      description: 'Get paid every week by default — fast, secure, and transparent.',
      gradient: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1625212001538-17dd918c6cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMHBheW1lbnQlMjBjYXNofGVufDF8fHx8MTc2Mjg2MDg1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl bg-white"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`
                }}
              >
                {/* Image background */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <ImageWithFallback 
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative p-8">
                  {/* Icon with animated background */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-50 blur-md group-hover:blur-lg transition-all duration-500`} />
                  </div>

                  <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <a href="#" className={`inline-flex items-center gap-2 group/link bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-300`}>
                    <span>Learn more</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
