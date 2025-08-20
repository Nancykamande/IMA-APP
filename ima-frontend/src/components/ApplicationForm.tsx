import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Briefcase, 
  Home, 
  Upload, 
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useToast } from "./hooks/use-toast";

export const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationalId: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Employment Information
    employerName: "",
    position: "",
    employmentType: "",
    monthlyIncome: "",
    yearsEmployed: "",
    
    // Loan Information
    propertyValue: "",
    loanAmount: "",
    repaymentPeriod: "",
    propertyType: "",
    propertyAddress: "",
  });

  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24-48 hours.",
    });
  };

  return (
    <section id="apply" className="py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Apply for Your Mortgage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete your application in just a few simple steps. Our secure form protects your information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-primary">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{progress.toFixed(0)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {currentStep === 1 && <User className="h-5 w-5 text-primary" />}
                {currentStep === 2 && <Briefcase className="h-5 w-5 text-primary" />}
                {currentStep === 3 && <Home className="h-5 w-5 text-primary" />}
                {currentStep === 4 && <Upload className="h-5 w-5 text-primary" />}
                <span>
                  {currentStep === 1 && "Personal Information"}
                  {currentStep === 2 && "Employment Details"}
                  {currentStep === 3 && "Loan Information"}
                  {currentStep === 4 && "Document Upload"}
                </span>
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Tell us about yourself"}
                {currentStep === 2 && "Your employment and income details"}
                {currentStep === 3 && "Property and loan preferences"}
                {currentStep === 4 && "Upload required documents"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationalId">National ID / Passport</Label>
                    <Input
                      id="nationalId"
                      value={formData.nationalId}
                      onChange={(e) => handleInputChange("nationalId", e.target.value)}
                      placeholder="123-45-6789"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="New York"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="10001"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Employment Information */}
              {currentStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employerName">Employer Name</Label>
                    <Input
                      id="employerName"
                      value={formData.employerName}
                      onChange={(e) => handleInputChange("employerName", e.target.value)}
                      placeholder="ABC Corporation"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position/Title</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employmentType">Employment Type</Label>
                    <Select 
                      value={formData.employmentType} 
                      onValueChange={(value) => handleInputChange("employmentType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="self-employed">Self-employed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome">Monthly Income ($)</Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={formData.monthlyIncome}
                      onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                      placeholder="7500"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="yearsEmployed">Years with Current Employer</Label>
                    <Input
                      id="yearsEmployed"
                      type="number"
                      value={formData.yearsEmployed}
                      onChange={(e) => handleInputChange("yearsEmployed", e.target.value)}
                      placeholder="3"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Loan Information */}
              {currentStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="propertyValue">Property Value ($)</Label>
                    <Input
                      id="propertyValue"
                      type="number"
                      value={formData.propertyValue}
                      onChange={(e) => handleInputChange("propertyValue", e.target.value)}
                      placeholder="500000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="loanAmount">Requested Loan Amount ($)</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      value={formData.loanAmount}
                      onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                      placeholder="400000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="repaymentPeriod">Repayment Period</Label>
                    <Select 
                      value={formData.repaymentPeriod} 
                      onValueChange={(value) => handleInputChange("repaymentPeriod", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="25">25 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select 
                      value={formData.propertyType} 
                      onValueChange={(value) => handleInputChange("propertyType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family Home</SelectItem>
                        <SelectItem value="condo">Condominium</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="multi-family">Multi-family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="propertyAddress">Property Address</Label>
                    <Textarea
                      id="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={(e) => handleInputChange("propertyAddress", e.target.value)}
                      placeholder="456 Property Lane, City, State 12345"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Document Upload */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-dashed border-2 border-border hover:border-primary transition-colors">
                      <CardContent className="flex flex-col items-center justify-center py-8">
                        <Upload className="h-8 w-8 text-muted-foreground mb-4" />
                        <h3 className="font-semibold mb-2">Pay Stubs</h3>
                        <p className="text-sm text-muted-foreground text-center">
                          Upload your last 2-3 pay stubs
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Choose Files
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-dashed border-2 border-border hover:border-primary transition-colors">
                      <CardContent className="flex flex-col items-center justify-center py-8">
                        <Upload className="h-8 w-8 text-muted-foreground mb-4" />
                        <h3 className="font-semibold mb-2">Bank Statements</h3>
                        <p className="text-sm text-muted-foreground text-center">
                          Last 3 months of bank statements
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Choose Files
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-dashed border-2 border-border hover:border-primary transition-colors">
                      <CardContent className="flex flex-col items-center justify-center py-8">
                        <Upload className="h-8 w-8 text-muted-foreground mb-4" />
                        <h3 className="font-semibold mb-2">ID Documents</h3>
                        <p className="text-sm text-muted-foreground text-center">
                          Driver's license or passport
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Choose Files
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-dashed border-2 border-border hover:border-primary transition-colors">
                      <CardContent className="flex flex-col items-center justify-center py-8">
                        <Upload className="h-8 w-8 text-muted-foreground mb-4" />
                        <h3 className="font-semibold mb-2">Property Documents</h3>
                        <p className="text-sm text-muted-foreground text-center">
                          Purchase agreement or listing
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Choose Files
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Document Requirements</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• All documents must be clear and legible</li>
                          <li>• Accepted formats: PDF, JPG, PNG (max 10MB each)</li>
                          <li>• Documents should be dated within the last 30 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Button 
                  variant="outline" 
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                <div className="flex space-x-4">
                  {currentStep < totalSteps ? (
                    <Button variant="premium" onClick={handleNext}>
                      Next Step
                    </Button>
                  ) : (
                    <Button variant="success" onClick={handleSubmit}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Submit Application
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};