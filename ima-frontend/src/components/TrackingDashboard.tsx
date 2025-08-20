import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress}   from '@/components/ui/progress';
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  MessageSquare, 
  Download,
  Eye
} from "lucide-react";

// Mock data for demonstration
const mockApplications = [
  {
    id: "ML-2024-001",
    propertyAddress: "123 Oak Street, Springfield, IL",
    loanAmount: "$425,000",
    status: "Under Review",
    progress: 60,
    submittedDate: "2024-01-15",
    lastUpdate: "2024-01-18",
    statusColor: "warning" as const,
    nextStep: "Credit verification in progress",
    documents: [
      { name: "Application Form", status: "approved" },
      { name: "Pay Stubs", status: "approved" },
      { name: "Bank Statements", status: "pending" },
      { name: "Credit Report", status: "in-progress" }
    ],
    comments: [
      {
        author: "Sarah Johnson - Loan Officer",
        date: "2024-01-18",
        message: "Your application looks great! We're currently verifying your employment. Should have an update by Friday."
      }
    ]
  },
  {
    id: "ML-2024-002",
    propertyAddress: "456 Pine Avenue, Denver, CO",
    loanAmount: "$325,000",
    status: "Approved",
    progress: 100,
    submittedDate: "2024-01-10",
    lastUpdate: "2024-01-20",
    statusColor: "success" as const,
    nextStep: "Closing scheduled for February 1st",
    documents: [
      { name: "Application Form", status: "approved" },
      { name: "Pay Stubs", status: "approved" },
      { name: "Bank Statements", status: "approved" },
      { name: "Credit Report", status: "approved" }
    ],
    comments: [
      {
        author: "Mike Chen - Loan Officer",
        date: "2024-01-20",
        message: "Congratulations! Your loan has been approved. We'll be in touch to schedule your closing."
      }
    ]
  }
];

export const TrackingDashboard = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4" />;
      case "Under Review":
        return <Clock className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getDocumentIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-primary" />;
      default:
        return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <section id="tracking" className="py-section bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Track Your Applications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about your mortgage application progress with real-time updates and direct communication with your loan officer.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {mockApplications.map((application) => (
            <Card key={application.id} className="shadow-medium">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      {getStatusIcon(application.status)}
                      <span>Application {application.id}</span>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {application.propertyAddress} • {application.loanAmount}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <Badge variant={application.statusColor === 'success' || application.statusColor === 'warning' ? 'secondary' : 'default'}>
                      {application.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Progress Overview */}
                  <div className="lg:col-span-1">
                    <h3 className="font-semibold mb-4 text-primary">Application Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Overall Progress</span>
                          <span>{application.progress}%</span>
                        </div>
                        <Progress value={application.progress} className="h-3" />
                      </div>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Submitted:</span>
                          <span>{application.submittedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Last Update:</span>
                          <span>{application.lastUpdate}</span>
                        </div>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="text-sm font-medium mb-1">Next Step:</div>
                        <div className="text-sm text-muted-foreground">{application.nextStep}</div>
                      </div>
                    </div>
                  </div>

                  {/* Document Status */}
                  <div className="lg:col-span-1">
                    <h3 className="font-semibold mb-4 text-primary">Document Status</h3>
                    <div className="space-y-3">
                      {application.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                          <div className="flex items-center space-x-3">
                            {getDocumentIcon(doc.status)}
                            <span className="text-sm font-medium">{doc.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant={doc.status === 'approved' ? 'secondary' : 'default'}
                              className="text-xs"
                            >
                              {doc.status}
                            </Badge>
                            {doc.status === 'approved' && (
                              <Button variant="ghost" size="sm">
                                <Download className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Communications */}
                  <div className="lg:col-span-1">
                    <h3 className="font-semibold mb-4 text-primary">Recent Updates</h3>
                    <div className="space-y-4">
                      {application.comments.map((comment, index) => (
                        <div key={index} className="bg-background p-4 rounded-lg border">
                          <div className="flex items-center space-x-2 mb-2">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">{comment.author}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {comment.message}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            {comment.date}
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact Loan Officer
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* No Applications State */}
          <Card className="shadow-medium text-center py-12">
            <CardContent>
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">No Applications Yet</h3>
              <p className="text-muted-foreground mb-6">
                Start your mortgage journey by submitting your first application.
              </p>
              <Button variant="hero" size="lg">
                Apply for Mortgage
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};