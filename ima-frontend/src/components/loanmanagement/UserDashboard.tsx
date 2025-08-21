import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LoanCalculator } from "@/components/LoanCalculator";
import { Card } from "@/components/ui/footercard";
import { Home, Key, Shield, CheckCircle } from "lucide-react";
import { ApplicationForm } from "@/components/ApplicationForm";
import { TrackingDashboard } from "@/components/TrackingDashboard";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <TrackingDashboard />
        <div className="grid gap-8 md:grid-cols-3 justify-items-center">
    </div>
    <div></div>
      </main>
      
    </div>
  );
};

export default UserDashboard;