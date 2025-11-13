import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  DollarSign, 
  Target, 
  MessageSquare, 
  ShieldCheck, 
  Lock, 
  BarChart3 
} from 'lucide-react';

export function FeatureGrid() {
  const features = [
    {
      icon: DollarSign,
      title: 'Transparent Payouts',
      bullets: [
        'Upfront price breakdown',
        'Platform fee visibility',
        'Tax calculation included'
      ],
      gradient: 'from-green-400 to-green-600',
      image: 'https://images.unsplash.com/photo-1625212001538-17dd918c6cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMHBheW1lbnQlMjBjYXNofGVufDF8fHx8MTc2Mjg2MDg1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Target,
      title: 'Smart Matching Algorithm',
      bullets: [
        'Skill-based ranking',
        'Best project surfacing',
        'Personalized recommendations'
      ],
      gradient: 'from-orange-400 to-orange-600',
      image: 'https://images.unsplash.com/photo-1756363212224-dca8af2eac90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJnZXQlMjBidWxsc2V5ZSUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYyODYwODU2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: MessageSquare,
      title: 'In-App Chat & Task Board',
      bullets: [
        'Communicate seamlessly',
        'Submit deliverables',
        'Track progress in one place'
      ],
      gradient: 'from-blue-400 to-blue-600',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbWVzc2FnZSUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzYyODYwODU2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: ShieldCheck,
      title: 'License & KYC Management',
      bullets: [
        'Store compliance documents',
        'Auto-renewal reminders',
        'Secure document storage'
      ],
      gradient: 'from-green-400 to-green-600',
      image: 'https://images.unsplash.com/photo-1549839731-9652aa56a8cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVudCUyMGdsYXNzJTIwY2xlYXJ8ZW58MXx8fHwxNzYyODYwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Lock,
      title: 'Secure Escrow Payments',
      bullets: [
        'Hold payments safely',
        'Milestone-based release',
        'Dispute protection'
      ],
      gradient: 'from-blue-400 to-blue-600',
      image: 'https://images.unsplash.com/photo-1625212001538-17dd918c6cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMHBheW1lbnQlMjBjYXNofGVufDF8fHx8MTc2Mjg2MDg1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      bullets: [
        'Track earnings over time',
        'Monitor conversion rates',
        'Identify repeat clients'
      ],
      gradient: 'from-orange-400 to-orange-600',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjI4NTkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="product" className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help vendors and freelancers manage their work efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl"
              >
                {/* Image thumbnail at top */}
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-gray-600 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${bulletIndex * 50}ms` }}>
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mt-2 group-hover:scale-150 transition-transform duration-300`} />
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
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
