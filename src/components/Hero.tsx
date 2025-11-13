import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Zap, Clock, CreditCard } from 'lucide-react';

interface HeroProps {
  onDemoClick: () => void;
}

export function Hero({ onDemoClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f8fafc] pt-16 pb-24">
      {/* Gradient background shapes with animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Get Work Instantly.
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 bg-clip-text text-transparent animate-pulse" style={{ backgroundSize: '200% auto' }}>
                  Get Paid Weekly.
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                An all-in-one platform for vendors & freelancers — instant project matches, transparent payouts, and 24/7 support.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg h-14 px-8 bg-[length:200%_auto] hover:bg-right animate-pulse"
                style={{ backgroundSize: '200% auto' }}
              >
                Get Started — It's Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-lg h-14 px-8 border-2 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg transition-all duration-300"
                onClick={onDemoClick}
              >
                See Demo
              </Button>
            </div>

            {/* Micro-copy */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> No upfront fees
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Weekly payouts
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> 24/7 support
              </span>
            </div>
          </div>

          {/* Right column - Device mockup */}
          <div className="relative">
            {/* Floating badges with enhanced styling */}
            <div className="absolute -top-4 left-4 z-10 animate-bounce">
              <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-2xl px-4 py-3 rounded-2xl flex items-center gap-2 border-2 border-white">
                <Zap className="w-5 h-5" />
                <span>Instant Work</span>
              </Badge>
            </div>
            <div className="absolute top-1/4 -left-4 z-10 animate-pulse">
              <Badge className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-2xl px-4 py-3 rounded-2xl flex items-center gap-2 border-2 border-white">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </Badge>
            </div>
            <div className="absolute bottom-1/4 -right-4 z-10 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Badge className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-2xl px-4 py-3 rounded-2xl flex items-center gap-2 border-2 border-white">
                <CreditCard className="w-5 h-5" />
                <span>Weekly Payouts</span>
              </Badge>
            </div>

            {/* Device mockup with enhanced styling */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-800 hover:scale-105 transition-transform duration-500">
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-50 relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1527698266440-12104e498b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyODU5NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Orvion Dashboard"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-orange-500/10 to-green-500/10" />
              </div>
              {/* Bottom toolbar mockup */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500" />
            </div>

            {/* Multi-color gradient glow behind device */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 rounded-3xl blur-3xl opacity-30 -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
