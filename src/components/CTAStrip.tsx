import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CTAStrip() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-orange-600 to-green-600" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
            Join Orvion — Get your first job in 24 hours
          </h2>
          <p className="text-xl text-white/90">
            Start working on projects that match your skills. No upfront fees, weekly payouts, and support when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-600 to-green-600 hover:bg-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl h-14 px-8 group border-2 border-white/20"
            >
              <span className="bg-gradient-to-r from-blue-600 via-orange-600 to-green-600 bg-clip-text text-transparent">
                Get Started Now
              </span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-orange-600" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 rounded-xl h-14 px-8 backdrop-blur-sm"
            >
              View Pricing
            </Button>
          </div>
          <p className="text-sm text-white/80">
            Join 8,000+ vendors already earning on Orvion
          </p>
        </div>
      </div>
    </section>
  );
}
