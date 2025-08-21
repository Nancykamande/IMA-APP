import { Button } from "@/components/ui/button";
import { Calculator, FileText, BarChart3, User } from "lucide-react";
import {useNavigate} from 'react-router-dom'

export const Header = () => {
   const navigator = useNavigate();

   function loadSignInFrm(){

    navigator('/sign-in');

  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">ML</span>
            </div>
            <span className="text-xl font-bold text-primary">MortgageLend</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
            <Calculator className="h-4 w-4" />
            <span>Calculator</span>
          </a>
          {/* <a href="#apply" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Apply</span>
          </a>
          <a href="#tracking" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Track Application</span>
          </a> */}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm"  onClick={loadSignInFrm}>
            <User className="h-4 w-4" />
            Login
          </Button>
          <Button variant="hero" size="sm" onClick={loadSignInFrm}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};