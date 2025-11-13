import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      subtitle: 'Starter',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '0% platform fee to join',
        'Access to limited projects',
        'Community support',
        'Basic profile',
        'Manual payments'
      ],
      cta: 'Start free',
      highlighted: false
    },
    {
      name: 'Pro',
      subtitle: 'Recommended',
      price: '5%',
      period: 'per project',
      description: 'Best for active freelancers',
      features: [
        '5% platform fee',
        'Priority project matches',
        'Weekly automatic payouts',
        'Priority support (24/7)',
        'Enhanced profile visibility',
        'Analytics dashboard',
        'Unlimited proposals'
      ],
      cta: 'Upgrade to Pro',
      highlighted: true
    },
    {
      name: 'Enterprise',
      subtitle: 'Custom',
      price: 'Custom',
      period: 'pricing',
      description: 'For teams and agencies',
      features: [
        'Custom pricing & terms',
        'Dedicated account manager',
        'Priority support with SLA',
        'Custom integrations',
        'Advanced analytics',
        'Multi-user accounts',
        'Volume discounts'
      ],
      cta: 'Contact sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-2 border-[#06b6d4] shadow-2xl scale-105 bg-gradient-to-b from-white to-[#f8fafc]' 
                  : 'border border-gray-100 hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#0ea5a4] to-[#2563eb] text-white rounded-full text-sm mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {plan.subtitle}
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {plan.description}
                </p>
              </div>

              <Button 
                className={`w-full rounded-lg h-12 mb-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#0ea5a4] to-[#2563eb] text-white hover:opacity-90'
                    : 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include secure escrow payments, KYC management, and in-app chat.
          </p>
        </div>
      </div>
    </section>
  );
}
