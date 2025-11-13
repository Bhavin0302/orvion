import { Button } from './ui/button';
import { UserCircle, Search, Wallet } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: UserCircle,
      title: 'Create profile',
      description: 'Add skills & documents',
      cta: 'Complete profile',
      gradient: 'from-[#ff6bcb] to-[#ffb86b]'
    },
    {
      number: 2,
      icon: Search,
      title: 'Get matches',
      description: 'Grab or bid projects',
      cta: 'Browse projects',
      gradient: 'from-[#0ea5a4] to-[#2563eb]'
    },
    {
      number: 3,
      icon: Wallet,
      title: 'Deliver & get paid',
      description: 'Weekly payouts + instant invoices',
      cta: 'Start earning',
      gradient: 'from-[#7c3aed] to-[#06b6d4]'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#0ea5a4] to-[#2563eb] opacity-20" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="text-center space-y-6">
                  {/* Step number and icon */}
                  <div className="relative inline-block">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                      <span className="text-sm text-gray-900">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="rounded-lg hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors"
                    >
                      {step.cta}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
