import { Button } from "@/components/ui/button";
import { Calculator, FileText, BarChart3, User } from "lucide-react";
import {useNavigate} from 'react-router-dom'

export const FooterMap = () => {
   const navigator = useNavigate();

  return (
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
  );
};