import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LoanCalculator } from "@/components/LoanCalculator";
import { Card } from "@/components/ui/footercard";
import { Home, Key, Shield, CheckCircle } from "lucide-react";
import { ApplicationForm } from "@/components/ApplicationForm";
import { TrackingDashboard } from "@/components/TrackingDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LoanCalculator />
        <div className="grid gap-8 md:grid-cols-3 justify-items-center">
  <Card className="max-w-xs shadow-md p-6 text-center">
    <Key className="mx-auto mb-4 h-12 w-12 text-secondary" />
    <h3 className="mb-3 text-xl font-semibold">Expert Guidance</h3>
    <p className="text-muted-foreground">
      Professional mortgage advisors to guide you through every step of the process.
    </p>
  </Card>

  <Card className="max-w-xs shadow-md p-6 text-center">
    <Home className="mx-auto mb-4 h-12 w-12 text-secondary" />
    <h3 className="mb-3 text-xl font-semibold">Home Solutions</h3>
    <p className="text-muted-foreground">
      Comprehensive mortgage solutions tailored to your unique homeownership goals.
    </p>
  </Card>

  <Card className="max-w-xs shadow-md p-6 text-center">
    <CheckCircle className="mx-auto mb-4 h-12 w-12 text-secondary" />
    <h3 className="mb-3 text-xl font-semibold">Trusted Service</h3>
    <p className="text-muted-foreground">
      Years of experience helping families achieve their dream of homeownership.
    </p>
  </Card>
    </div>
    <div></div>
      </main>
      
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">ML</span>
              </div>
              <span className="text-xl font-bold">MortgageLend</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md mx-auto">
              Making homeownership accessible with transparent, fast, and secure mortgage solutions.
            </p>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/60">
            <p>&copy; 2024 MortgageLend. All rights reserved. • Equal Housing Lender NMLS #123456</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;