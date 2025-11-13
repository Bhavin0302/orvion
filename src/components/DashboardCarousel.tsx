import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function DashboardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshots = [
    {
      title: 'Project Grid',
      description: 'Browse and filter available projects tailored to your skills',
      image: 'https://images.unsplash.com/photo-1743385779313-ac03bb0f997b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI4NTk3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'My Projects',
      description: 'Manage active projects, track deliverables, and communicate with clients',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjI4NTkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Profile & KYC',
      description: 'Complete your profile and manage compliance documents securely',
      image: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyODU5NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Payments & Withdrawal',
      description: 'Track earnings, view transaction history, and withdraw funds weekly',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjI4NTkzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            See Orvion in action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our intuitive dashboard designed for productivity
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main screenshot display */}
          <Card className="overflow-hidden rounded-2xl shadow-2xl border-0 bg-white">
            <div className="aspect-[16/10] relative bg-gradient-to-br from-gray-100 to-gray-50">
              <ImageWithFallback
                src={screenshots[activeIndex].image}
                alt={screenshots[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl mb-2">
                  {screenshots[activeIndex].title}
                </h3>
                <p className="text-white/90">
                  {screenshots[activeIndex].description}
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full w-12 h-12 bg-white shadow-lg hover:bg-gray-50"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full w-12 h-12 bg-white shadow-lg hover:bg-gray-50"
              onClick={handleNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-[#0ea5a4] to-[#2563eb] w-8' 
                    : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-lg hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors"
          >
            Request a live demo
          </Button>
        </div>
      </div>
    </section>
  );
}
