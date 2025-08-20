import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign, Calendar, Percent } from "lucide-react";
import calculatorIcon from "@/assets/calculator-icon.png";

export const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<string>("500000");
  const [downPayment, setDownPayment] = useState<string>("100000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [loanTerm, setLoanTerm] = useState<string>("30");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  };

  return (
    <section id="calculator" className="py-section bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img src={calculatorIcon} alt="Calculator" className="w-16 h-16" />
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">Mortgage Calculator</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate of your monthly mortgage payments and see how different loan terms affect your budget.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <span>Loan Details</span>
                </CardTitle>
                <CardDescription>
                  Enter your loan information to calculate monthly payments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="property-value">Property Value</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="property-value"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="pl-10"
                      placeholder="500,000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="down-payment">Down Payment</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="down-payment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="pl-10"
                      placeholder="100,000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="interest-rate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="pl-10"
                      placeholder="6.5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loan-term">Loan Term</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
                      <SelectTrigger className="pl-10">
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
                </div>

                <Button onClick={calculatePayment} className="w-full" variant="premium" size="lg">
                  Calculate Payment
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-primary">Payment Breakdown</CardTitle>
                <CardDescription>
                  Your estimated monthly mortgage payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                {monthlyPayment ? (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-success rounded-xl text-white">
                      <div className="text-sm font-medium mb-2">Monthly Payment</div>
                      <div className="text-4xl font-bold">
                        ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground">Principal & Interest</div>
                        <div className="text-xl font-semibold text-primary">
                          ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground">Loan Amount</div>
                        <div className="text-xl font-semibold text-primary">
                          ${(parseFloat(loanAmount) - parseFloat(downPayment)).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button variant="hero" size="lg" className="w-full">
                        Apply with These Terms
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Click "Calculate Payment" to see your estimated monthly payment</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};