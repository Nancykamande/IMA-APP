import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { CustomerProfile } from "./CustomerProfile";
import { MortgageSidebar } from "./SideBar";

export function DashbaordStatis() {
  const stats = [
    {
      title: "Loan Amount",
      value: "$450,000",
      description: "Principal amount approved",
      icon: DollarSign,
      trend: "+2.5% from last month",
      color: "primary"
    },
    {
      title: "Monthly Payment",
      value: "$2,847",
      description: "Including taxes & insurance",
      icon: Calendar,
      trend: "Fixed rate 30-year",
      color: "success"
    },
    {
      title: "Interest Rate",
      value: "6.25%",
      description: "Annual percentage rate",
      icon: TrendingUp,
      trend: "Locked until closing",
      color: "info"
    },
    {
      title: "Application Status",
      value: "Under Review",
      description: "Expected completion: 5 days",
      icon: Clock,
      trend: "75% complete",
      color: "warning"
    }
  ];

  const applicationProgress = 75;
  const documentsSubmitted = 8;
  const documentsTotal = 12;

  return (
    <section id="calculator" className="py-section bg-muted/30">   
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              <div className="flex items-center mt-2">
                <Badge variant="secondary" className="text-xs">
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </section>
  );
}

export default DashbaordStatis;