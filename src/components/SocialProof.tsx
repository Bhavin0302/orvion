import { useState } from 'react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from './ui/button';

export function SocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { value: '20k+', label: 'Projects Posted', color: 'from-blue-500 to-blue-600' },
    { value: '8k+', label: 'Active Vendors', color: 'from-orange-500 to-orange-600' },
    { value: '₹8.5 Cr', label: 'Weekly Payouts', color: 'from-green-500 to-green-600' }
  ];

  const testimonials = [
    {
      name: 'Priya M.',
      role: 'UI Developer',
      avatar: 'https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyODM0MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Orvion helped me land 5 consistent projects in one week — payments are quick and support is great.',
      rating: 5,
      color: 'blue'
    },
    {
      name: 'Rajesh K.',
      role: 'Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1758519290828-2e62b7699b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBmcmVlbGFuY2VyfGVufDF8fHx8MTc2Mjg1OTc2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The weekly payout system is a game-changer. No more waiting months to get paid for my work!',
      rating: 5,
      color: 'orange'
    },
    {
      name: 'Sarah L.',
      role: 'Content Writer',
      avatar: 'https://images.unsplash.com/photo-1573495804669-ec82ad00f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NjI4NTc1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Best platform for freelancers! The matching algorithm actually works and I get projects that fit my skills perfectly.',
      rating: 5,
      color: 'green'
    }
  ];

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`text-5xl sm:text-6xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500`}>
                {stat.value}
              </div>
              <div className="text-gray-600 relative z-10">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
              Loved by vendors worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of freelancers who trust Orvion
            </p>
          </div>

          <div className="relative">
            <Card className="relative p-8 sm:p-12 border-0 shadow-2xl rounded-3xl bg-white overflow-hidden">
              {/* Animated gradient background based on testimonial color */}
              <div 
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${
                  testimonials[activeTestimonial].color === 'blue' ? 'from-blue-400 to-blue-600' :
                  testimonials[activeTestimonial].color === 'orange' ? 'from-orange-400 to-orange-600' :
                  'from-green-400 to-green-600'
                } opacity-5 rounded-full blur-3xl transition-all duration-1000`}
              />

              {/* Quote icon with color */}
              <Quote className={`w-16 h-16 ${
                testimonials[activeTestimonial].color === 'blue' ? 'text-blue-500' :
                testimonials[activeTestimonial].color === 'orange' ? 'text-orange-500' :
                'text-green-500'
              } opacity-20 mb-6 transition-colors duration-500`} />

              {/* Star rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 fill-current ${
                      testimonials[activeTestimonial].color === 'blue' ? 'text-blue-500' :
                      testimonials[activeTestimonial].color === 'orange' ? 'text-orange-500' :
                      'text-green-500'
                    } animate-pulse`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed italic relative z-10">
                "{testimonials[activeTestimonial].quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <Avatar className="w-16 h-16 border-4 border-white shadow-lg">
                    <AvatarImage src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].name} />
                    <AvatarFallback>{testimonials[activeTestimonial].name[0]}</AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${
                    testimonials[activeTestimonial].color === 'blue' ? 'bg-blue-500' :
                    testimonials[activeTestimonial].color === 'orange' ? 'bg-orange-500' :
                    'bg-green-500'
                  } flex items-center justify-center border-2 border-white`}>
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <div className="text-xl text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-500">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
                onClick={handlePrevTestimonial}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? `w-8 ${
                          testimonial.color === 'blue' ? 'bg-blue-500' :
                          testimonial.color === 'orange' ? 'bg-orange-500' :
                          'bg-green-500'
                        }` 
                        : 'w-2 bg-gray-300'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>

              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
                onClick={handleNextTestimonial}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
