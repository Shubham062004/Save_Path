
import { useState } from "react";
import { 
  Area, 
  AreaChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftRight, Briefcase, Home, Car, Users, TrendingUp, Wallet } from "lucide-react";

type Scenario = "career" | "house" | "car" | "family" | "investment";

// Sample data for demonstration purposes
const baselineData = [
  { year: "2023", baseline: 40000, whatif: 40000 },
  { year: "2024", baseline: 50000, whatif: 50000 },
  { year: "2025", baseline: 60000, whatif: 60000 },
  { year: "2026", baseline: 72000, whatif: 72000 },
  { year: "2027", baseline: 85000, whatif: 85000 },
  { year: "2028", baseline: 100000, whatif: 100000 },
  { year: "2029", baseline: 115000, whatif: 115000 },
  { year: "2030", baseline: 132000, whatif: 132000 },
];

const careerChangeData = [
  { year: "2023", baseline: 40000, whatif: 40000 },
  { year: "2024", baseline: 50000, whatif: 60000 },
  { year: "2025", baseline: 60000, whatif: 80000 },
  { year: "2026", baseline: 72000, whatif: 102000 },
  { year: "2027", baseline: 85000, whatif: 128000 },
  { year: "2028", baseline: 100000, whatif: 158000 },
  { year: "2029", baseline: 115000, whatif: 192000 },
  { year: "2030", baseline: 132000, whatif: 230000 },
];

const housePurchaseData = [
  { year: "2023", baseline: 40000, whatif: 40000 },
  { year: "2024", baseline: 50000, whatif: 15000 },
  { year: "2025", baseline: 60000, whatif: 25000 },
  { year: "2026", baseline: 72000, whatif: 38000 },
  { year: "2027", baseline: 85000, whatif: 54000 },
  { year: "2028", baseline: 100000, whatif: 72000 },
  { year: "2029", baseline: 115000, whatif: 92000 },
  { year: "2030", baseline: 132000, whatif: 116000 },
];

const carPurchaseData = [
  { year: "2023", baseline: 40000, whatif: 40000 },
  { year: "2024", baseline: 50000, whatif: 30000 },
  { year: "2025", baseline: 60000, whatif: 40000 },
  { year: "2026", baseline: 72000, whatif: 55000 },
  { year: "2027", baseline: 85000, whatif: 72000 },
  { year: "2028", baseline: 100000, whatif: 92000 },
  { year: "2029", baseline: 115000, whatif: 110000 },
  { year: "2030", baseline: 132000, whatif: 132000 },
];

const familyExpansionData = [
  { year: "2023", baseline: 40000, whatif: 40000 },
  { year: "2024", baseline: 50000, whatif: 35000 },
  { year: "2025", baseline: 60000, whatif: 45000 },
  { year: "2026", baseline: 72000, whatif: 58000 },
  { year: "2027", baseline: 85000, whatif: 72000 },
  { year: "2028", baseline: 100000, whatif: 88000 },
  { year: "2029", baseline: 115000, whatif: 106000 },
  { year: "2030", baseline: 132000, whatif: 126000 },
];

const investmentStrategyData = [
  { year: "2023", baseline: 40000, whatif: 40000 },
  { year: "2024", baseline: 50000, whatif: 55000 },
  { year: "2025", baseline: 60000, whatif: 72000 },
  { year: "2026", baseline: 72000, whatif: 92000 },
  { year: "2027", baseline: 85000, whatif: 118000 },
  { year: "2028", baseline: 100000, whatif: 148000 },
  { year: "2029", baseline: 115000, whatif: 184000 },
  { year: "2030", baseline: 132000, whatif: 226000 },
];

const WhatIfScenarios = () => {
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [customScenario, setCustomScenario] = useState(false);
  const [scenarioDetails, setScenarioDetails] = useState({
    careerSalaryIncrease: "30",
    houseCost: "300000",
    carCost: "35000",
    familyExpense: "15000",
    investmentReturn: "12",
  });
  
  const getDataForScenario = (scenario: Scenario | null) => {
    switch (scenario) {
      case "career":
        return careerChangeData;
      case "house":
        return housePurchaseData;
      case "car":
        return carPurchaseData;
      case "family":
        return familyExpansionData;
      case "investment":
        return investmentStrategyData;
      default:
        return baselineData;
    }
  };
  
  const data = getDataForScenario(activeScenario);
  
  // Calculate the difference between baseline and whatif at the end
  const endYearDifference = data[data.length - 1].whatif - data[data.length - 1].baseline;
  const isPositive = endYearDifference >= 0;
  
  const handleScenarioClick = (scenario: Scenario) => {
    setActiveScenario(scenario);
    setCustomScenario(false);
  };
  
  const handleInputChange = (field: keyof typeof scenarioDetails, value: string) => {
    setScenarioDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What If Scenario Builder</h2>
        <p className="text-gray-600">Explore how different life choices could impact your financial future.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Button
          variant={activeScenario === "career" ? "default" : "outline"}
          className={`flex items-center justify-center gap-2 h-auto py-4 ${
            activeScenario === "career" ? "bg-finance-blue hover:bg-finance-blue-dark" : ""
          }`}
          onClick={() => handleScenarioClick("career")}
        >
          <Briefcase size={18} />
          <div className="text-left">
            <div className="font-medium">Career Change</div>
            <div className="text-xs opacity-80">Higher salary job</div>
          </div>
        </Button>
        
        <Button
          variant={activeScenario === "house" ? "default" : "outline"}
          className={`flex items-center justify-center gap-2 h-auto py-4 ${
            activeScenario === "house" ? "bg-finance-blue hover:bg-finance-blue-dark" : ""
          }`}
          onClick={() => handleScenarioClick("house")}
        >
          <Home size={18} />
          <div className="text-left">
            <div className="font-medium">Buy a House</div>
            <div className="text-xs opacity-80">Long-term investment</div>
          </div>
        </Button>
        
        <Button
          variant={activeScenario === "car" ? "default" : "outline"}
          className={`flex items-center justify-center gap-2 h-auto py-4 ${
            activeScenario === "car" ? "bg-finance-blue hover:bg-finance-blue-dark" : ""
          }`}
          onClick={() => handleScenarioClick("car")}
        >
          <Car size={18} />
          <div className="text-left">
            <div className="font-medium">Buy a Car</div>
            <div className="text-xs opacity-80">Vehicle purchase</div>
          </div>
        </Button>
        
        <Button
          variant={activeScenario === "family" ? "default" : "outline"}
          className={`flex items-center justify-center gap-2 h-auto py-4 ${
            activeScenario === "family" ? "bg-finance-blue hover:bg-finance-blue-dark" : ""
          }`}
          onClick={() => handleScenarioClick("family")}
        >
          <Users size={18} />
          <div className="text-left">
            <div className="font-medium">Family</div>
            <div className="text-xs opacity-80">Marriage, children</div>
          </div>
        </Button>
        
        <Button
          variant={activeScenario === "investment" ? "default" : "outline"}
          className={`flex items-center justify-center gap-2 h-auto py-4 ${
            activeScenario === "investment" ? "bg-finance-blue hover:bg-finance-blue-dark" : ""
          }`}
          onClick={() => handleScenarioClick("investment")}
        >
          <TrendingUp size={18} />
          <div className="text-left">
            <div className="font-medium">Investments</div>
            <div className="text-xs opacity-80">Stocks, crypto, etc.</div>
          </div>
        </Button>
      </div>
      
      {activeScenario && (
        <>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <ArrowLeftRight className="h-5 w-5 text-finance-blue mr-2" />
                <h3 className="font-medium">
                  {activeScenario === "career" && "Career Change Scenario"}
                  {activeScenario === "house" && "Home Purchase Scenario"}
                  {activeScenario === "car" && "Car Purchase Scenario"}
                  {activeScenario === "family" && "Family Expansion Scenario"}
                  {activeScenario === "investment" && "Investment Strategy Scenario"}
                </h3>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setCustomScenario(!customScenario)}
              >
                {customScenario ? "Hide Options" : "Customize Scenario"}
              </Button>
            </div>
            
            {customScenario && (
              <div className="bg-white/80 p-4 rounded-lg border border-gray-200 mb-4">
                {activeScenario === "career" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Salary Increase (%)</label>
                      <Input 
                        value={scenarioDetails.careerSalaryIncrease}
                        onChange={(e) => handleInputChange("careerSalaryIncrease", e.target.value)}
                        type="number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Career Path</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select career path" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                
                {activeScenario === "house" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">House Cost ($)</label>
                      <Input 
                        value={scenarioDetails.houseCost}
                        onChange={(e) => handleInputChange("houseCost", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label>
                      <Input defaultValue="20" type="number" />
                    </div>
                  </div>
                )}
                
                {activeScenario === "car" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Car Cost ($)</label>
                      <Input 
                        value={scenarioDetails.carCost}
                        onChange={(e) => handleInputChange("carCost", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Financing Term (years)</label>
                      <Select defaultValue="5">
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 Years</SelectItem>
                          <SelectItem value="5">5 Years</SelectItem>
                          <SelectItem value="7">7 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                
                {activeScenario === "family" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Monthly Expenses ($)</label>
                      <Input 
                        value={scenarioDetails.familyExpense}
                        onChange={(e) => handleInputChange("familyExpense", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Family Size</label>
                      <Select defaultValue="3">
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 (Couple)</SelectItem>
                          <SelectItem value="3">3 (1 Child)</SelectItem>
                          <SelectItem value="4">4 (2 Children)</SelectItem>
                          <SelectItem value="5">5+ (3+ Children)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                
                {activeScenario === "investment" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expected Annual Return (%)</label>
                      <Input 
                        value={scenarioDetails.investmentReturn}
                        onChange={(e) => handleInputChange("investmentReturn", e.target.value)}
                        type="number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Investment Type</label>
                      <Select defaultValue="stocks">
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stocks">Stocks</SelectItem>
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="mixed">Mixed Portfolio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 flex justify-end">
                  <Button className="bg-finance-blue hover:bg-finance-blue-dark">Update Projection</Button>
                </div>
              </div>
            )}
            
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
                      labelFormatter={(label) => `Year: ${label}`}
                    />
                    <ReferenceLine
                      y={0}
                      stroke="#000"
                      strokeDasharray="3 3"
                    />
                    <Area
                      type="monotone"
                      dataKey="baseline"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#E5DEFF"
                      name="Current Path"
                    />
                    <Area
                      type="monotone"
                      dataKey="whatif"
                      stackId="2"
                      stroke="#33C3F0"
                      fill="#D3E4FD"
                      name="What If Scenario"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#8884d8] rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Current Path</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="w-3 h-3 bg-[#33C3F0] rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">
                      {activeScenario === "career" && "Career Change"}
                      {activeScenario === "house" && "Home Purchase"}
                      {activeScenario === "car" && "Car Purchase"}
                      {activeScenario === "family" && "Family Expansion"}
                      {activeScenario === "investment" && "Investment Strategy"}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">8-Year Difference</p>
                  <p className={`text-lg font-semibold ${isPositive ? 'text-finance-green' : 'text-red-500'}`}>
                    {isPositive ? '+' : ''}{endYearDifference.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100 p-4">
            <div className="flex items-center mb-3">
              <Wallet className="text-finance-blue mr-2 h-5 w-5" />
              <h3 className="font-medium">Financial Impact Summary</h3>
            </div>
            
            {activeScenario === "career" && (
              <p className="text-gray-700">A career change with a higher salary could significantly increase your net worth over time. While there might be short-term adjustments, the long-term financial benefits are substantial. Consider additional education or training that might be required.</p>
            )}
            
            {activeScenario === "house" && (
              <p className="text-gray-700">Buying a house will initially reduce your liquid assets due to the down payment and closing costs. However, you'll be building equity over time rather than paying rent. The long-term financial impact depends on property appreciation in your area.</p>
            )}
            
            {activeScenario === "car" && (
              <p className="text-gray-700">A car purchase has an immediate negative impact on your finances, but the impact diminishes over time as you pay off the loan. Consider how the total cost (purchase, insurance, maintenance) fits into your overall financial plan.</p>
            )}
            
            {activeScenario === "family" && (
              <p className="text-gray-700">Expanding your family increases monthly expenses and may affect career progression or income temporarily. While financially challenging in the short-term, proper planning can minimize the long-term impact on your financial goals.</p>
            )}
            
            {activeScenario === "investment" && (
              <p className="text-gray-700">A more aggressive investment strategy could substantially increase your net worth over time due to compound growth. However, this comes with increased risk and potential volatility. Consider your risk tolerance and time horizon before changing strategies.</p>
            )}
          </div>
        </>
      )}
      
      {!activeScenario && (
        <div className="text-center p-10 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100">
          <ArrowLeftRight size={40} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">Select a Scenario Above</h3>
          <p className="text-gray-600">Choose a financial scenario to visualize its potential impact on your future.</p>
        </div>
      )}
    </div>
  );
};

export default WhatIfScenarios;
