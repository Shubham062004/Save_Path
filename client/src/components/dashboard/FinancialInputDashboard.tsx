
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Banknote, Wallet, PiggyBank, CreditCard, Target } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FinancialInputs = {
  monthlySalary: string;
  annualBonus: string;
  monthlyExpenses: string;
  rent: string;
  utilities: string;
  currentSavings: string;
  monthlyInvestment: string;
  investmentType: string;
  loanAmount: string;
  loanEmi: string;
  financialGoal: string;
  goalAmount: string;
  goalTimeframe: string;
};

const FinancialInputDashboard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FinancialInputs>({
    defaultValues: {
      monthlySalary: "",
      annualBonus: "",
      monthlyExpenses: "",
      rent: "",
      utilities: "",
      currentSavings: "",
      monthlyInvestment: "",
      investmentType: "",
      loanAmount: "",
      loanEmi: "",
      financialGoal: "",
      goalAmount: "",
      goalTimeframe: "",
    },
  });

  const onSubmit = (data: FinancialInputs) => {
    setIsSubmitting(true);
    // In a real app, you would save this data to state or local storage
    console.log("Financial data submitted:", data);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Financial Input Dashboard</h2>
        <p className="text-gray-600">Enter your current financial information to start planning your future.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Income Section */}
            <div className="space-y-4">
              <div className="flex items-center text-lg font-medium text-gray-700 mb-2">
                <Banknote className="mr-2 h-5 w-5 text-finance-blue" />
                <h3>Income</h3>
              </div>
              
              <FormField
                control={form.control}
                name="monthlySalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Salary</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <Input placeholder="5,000" className="pl-8" {...field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="annualBonus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Bonus (if any)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <Input placeholder="10,000" className="pl-8" {...field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            {/* Expenses Section */}
            <div className="space-y-4">
              <div className="flex items-center text-lg font-medium text-gray-700 mb-2">
                <Wallet className="mr-2 h-5 w-5 text-finance-blue" />
                <h3>Expenses</h3>
              </div>
              
              <FormField
                control={form.control}
                name="monthlyExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Monthly Expenses</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <Input placeholder="3,000" className="pl-8" {...field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="rent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rent/Mortgage</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                          <Input placeholder="1,200" className="pl-8" {...field} />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="utilities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Utilities</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                          <Input placeholder="300" className="pl-8" {...field} />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Savings & Investments */}
            <div className="space-y-4">
              <div className="flex items-center text-lg font-medium text-gray-700 mb-2">
                <PiggyBank className="mr-2 h-5 w-5 text-finance-blue" />
                <h3>Savings & Investments</h3>
              </div>
              
              <FormField
                control={form.control}
                name="currentSavings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Savings</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <Input placeholder="25,000" className="pl-8" {...field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="monthlyInvestment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Investment</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <Input placeholder="500" className="pl-8" {...field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="investmentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Investment Type</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investment type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="stocks">Stocks</SelectItem>
                        <SelectItem value="bonds">Bonds</SelectItem>
                        <SelectItem value="mutualFunds">Mutual Funds</SelectItem>
                        <SelectItem value="realEstate">Real Estate</SelectItem>
                        <SelectItem value="crypto">Cryptocurrency</SelectItem>
                        <SelectItem value="savingsAccount">Savings Account</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            
            {/* Loans & EMIs */}
            <div className="space-y-4">
              <div className="flex items-center text-lg font-medium text-gray-700 mb-2">
                <CreditCard className="mr-2 h-5 w-5 text-finance-blue" />
                <h3>Loans & EMIs</h3>
              </div>
              
              <FormField
                control={form.control}
                name="loanAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Outstanding Loans</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <Input placeholder="50,000" className="pl-8" {...field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="loanEmi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Loan Payments (EMIs)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <Input placeholder="800" className="pl-8" {...field} />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            {/* Financial Goals */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center text-lg font-medium text-gray-700 mb-2">
                <Target className="mr-2 h-5 w-5 text-finance-blue" />
                <h3>Financial Goals</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="financialGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Goal</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select goal" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="retirement">Retirement</SelectItem>
                          <SelectItem value="house">Buy a House</SelectItem>
                          <SelectItem value="car">Buy a Car</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
                          <SelectItem value="emergency">Emergency Fund</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="goalAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Amount</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                          <Input placeholder="100,000" className="pl-8" {...field} />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="goalTimeframe"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Timeframe (years)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="10" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <Button 
              type="submit" 
              className="bg-finance-blue hover:bg-finance-blue-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Calculating..." : "Calculate Your Financial Future"}
            </Button>
            <p className="mt-2 text-sm text-gray-500">
              Your data stays on your device and is never shared with anyone.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FinancialInputDashboard;
