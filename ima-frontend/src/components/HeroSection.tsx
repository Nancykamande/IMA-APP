import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-mortgage.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional mortgage lending"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Dream Home
            <span className="block text-secondary-light">Awaits</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Simplified mortgage applications with instant pre-approval, competitive rates, and expert guidance every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-white/20 text-white hover:bg-white/10">
              Calculate Payment
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-secondary-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Trusted</h3>
              <p className="text-white/80">Bank-level security with 256-bit encryption</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-secondary-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Approval</h3>
              <p className="text-white/80">Get pre-approved in as little as 10 minutes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-secondary-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-white/80">Dedicated loan officers guide you through</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};