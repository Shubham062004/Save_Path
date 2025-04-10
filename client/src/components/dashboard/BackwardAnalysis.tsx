import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, HistoryIcon, RefreshCw, Clock, DollarSign, TrendingUp } from "lucide-react";

type BackwardScenario = {
  title: string;
  description: string;
  startDate: string;
  amount: number;
  frequency: "once" | "monthly" | "yearly";
  roi: number;
  data: {
    date: string;
    actual: number;
    potential: number;
  }[];
};

const defaultScenarios: BackwardScenario[] = [
  {
    title: "If you invested instead of buying that iPhone",
    description: "What if you invested the money spent on an iPhone 13 Pro?",
    startDate: "2021-09-15",
    amount: 999,
    frequency: "once",
    roi: 10.5,
    data: [
      { date: "Sep 2021", actual: 0, potential: 999 },
      { date: "Dec 2021", actual: 0, potential: 1024 },
      { date: "Mar 2022", actual: 0, potential: 1050 },
      { date: "Jun 2022", actual: 0, potential: 1075 },
      { date: "Sep 2022", actual: 0, potential: 1104 },
      { date: "Dec 2022", actual: 0, potential: 1144 },
      { date: "Mar 2023", actual: 0, potential: 1178 },
      { date: "Jun 2023", actual: 0, potential: 1213 },
      { date: "Sep 2023", actual: 0, potential: 1250 },
      { date: "Dec 2023", actual: 0, potential: 1282 },
      { date: "Mar 2024", actual: 0, potential: 1320 },
      { date: "Jun 2024", actual: 0, potential: 1360 },
      { date: "Sep 2024", actual: 0, potential: 1401 },
    ]
  },
  {
    title: "If you started investing $200 monthly in 2020",
    description: "What if you invested $200 every month since January 2020?",
    startDate: "2020-01-01",
    amount: 200,
    frequency: "monthly",
    roi: 8.5,
    data: [
      { date: "Jan 2020", actual: 0, potential: 200 },
      { date: "Apr 2020", actual: 0, potential: 810 },
      { date: "Jul 2020", actual: 0, potential: 1435 },
      { date: "Oct 2020", actual: 0, potential: 2075 },
      { date: "Jan 2021", actual: 0, potential: 2730 },
      { date: "Apr 2021", actual: 0, potential: 3402 },
      { date: "Jul 2021", actual: 0, potential: 4087 },
      { date: "Oct 2021", actual: 0, potential: 4789 },
      { date: "Jan 2022", actual: 0, potential: 5508 },
      { date: "Apr 2022", actual: 0, potential: 6244 },
      { date: "Jul 2022", actual: 0, potential: 6997 },
      { date: "Oct 2022", actual: 0, potential: 7769 },
      { date: "Jan 2023", actual: 0, potential: 8558 },
      { date: "Apr 2023", actual: 0, potential: 9366 },
      { date: "Jul 2023", actual: 0, potential: 10192 },
      { date: "Oct 2023", actual: 0, potential: 11037 },
      { date: "Jan 2024", actual: 0, potential: 11900 },
      { date: "Apr 2024", actual: 0, potential: 12784 },
    ]
  },
  {
    title: "If you paid off credit card debt early",
    description: "What if you paid an extra $100/month toward your credit card?",
    startDate: "2022-01-01",
    amount: 100,
    frequency: "monthly",
    roi: 17.99,
    data: [
      { date: "Jan 2022", actual: 5000, potential: 5000 },
      { date: "Apr 2022", actual: 4850, potential: 4550 },
      { date: "Jul 2022", actual: 4700, potential: 4080 },
      { date: "Oct 2022", actual: 4550, potential: 3590 },
      { date: "Jan 2023", actual: 4400, potential: 3080 },
      { date: "Apr 2023", actual: 4250, potential: 2550 },
      { date: "Jul 2023", actual: 4100, potential: 2000 },
      { date: "Oct 2023", actual: 3950, potential: 1430 },
      { date: "Jan 2024", actual: 3800, potential: 840 },
      { date: "Apr 2024", actual: 3650, potential: 230 },
      { date: "Jul 2024", actual: 3500, potential: 0 },
    ]
  }
];

const BackwardAnalysis = () => {
  const [activeScenario, setActiveScenario] = useState<BackwardScenario>(defaultScenarios[0]);
  const [customStartDate, setCustomStartDate] = useState("2021-01-01");
  const [customAmount, setCustomAmount] = useState("1000");
  const [customFrequency, setCustomFrequency] = useState<"once" | "monthly" | "yearly">("once");
  const [customROI, setCustomROI] = useState("10");
  const [showCustomScenario, setShowCustomScenario] = useState(false);
  
  const endData = activeScenario.data[activeScenario.data.length - 1];
  const difference = endData.potential - endData.actual;
  const isPositive = difference > 0;
  
  const handleScenarioSelect = (scenario: BackwardScenario) => {
    setActiveScenario(scenario);
    setShowCustomScenario(false);
  };
  
  const handleCustomScenario = () => {
    setShowCustomScenario(true);
  };
  
  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Financial Time Machine</h2>
        <p className="text-gray-600">Analyze how past financial decisions have impacted your current financial state.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-lg border border-gray-100 p-4">
            <h3 className="font-medium mb-3 flex items-center">
              <HistoryIcon size={18} className="text-finance-blue mr-2" />
              <span>Choose a Scenario</span>
            </h3>
            
            <div className="space-y-3">
              {defaultScenarios.map((scenario, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    activeScenario.title === scenario.title && !showCustomScenario
                      ? 'bg-finance-blue-light/30 border border-finance-blue-light'
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-100'
                  }`}
                  onClick={() => handleScenarioSelect(scenario)}
                >
                  <h4 className="font-medium text-sm">{scenario.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{scenario.startDate}</p>
                </button>
              ))}
              
              <button
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  showCustomScenario
                    ? 'bg-finance-blue-light/30 border border-finance-blue-light'
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-100'
                }`}
                onClick={handleCustomScenario}
              >
                <h4 className="font-medium text-sm flex items-center">
                  <RefreshCw size={14} className="mr-1" />
                  Create Custom Scenario
                </h4>
              </button>
            </div>
          </div>
          
          {showCustomScenario && (
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <h3 className="font-medium mb-3">Custom Scenario</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                  <Input 
                    type="date" 
                    value={customStartDate} 
                    onChange={(e) => setCustomStartDate(e.target.value)} 
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Amount</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                    <Input 
                      value={customAmount} 
                      onChange={(e) => setCustomAmount(e.target.value)} 
                      className="pl-8"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Frequency</label>
                  <Select 
                    value={customFrequency}
                    onValueChange={(value: "once" | "monthly" | "yearly") => setCustomFrequency(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">One-time</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Annual Return (%)</label>
                  <Input 
                    value={customROI} 
                    onChange={(e) => setCustomROI(e.target.value)} 
                  />
                </div>
                
                <Button className="w-full bg-finance-blue hover:bg-finance-blue-dark">
                  Calculate Impact
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg border border-gray-100 p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="font-medium">{activeScenario.title}</h3>
                <p className="text-sm text-gray-600">{activeScenario.description}</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <div className="flex items-center justify-end">
                  <Calendar size={14} className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">Starting: {activeScenario.startDate}</span>
                </div>
                <div className="flex items-center justify-end mt-1">
                  <DollarSign size={14} className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">
                    {activeScenario.amount.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0
                    })}{' '}
                    {activeScenario.frequency === "once" ? "" : `/ ${activeScenario.frequency}`}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={activeScenario.data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis 
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
                    labelFormatter={(label) => `Date: ${label}`}
                  />
                  <ReferenceLine
                    y={0}
                    stroke="#000"
                    strokeDasharray="3 3"
                  />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    name="Actual Path"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="potential"
                    name="Potential Path"
                    stroke="#4CAF50"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col">
              <div className="flex items-center text-gray-600 mb-2">
                <Clock size={18} className="mr-2" />
                <h4 className="font-medium">Time Period</h4>
              </div>
              <p className="text-2xl font-semibold">
                {activeScenario.data.length * 3} months
              </p>
              <p className="text-sm text-gray-600 mt-auto pt-2">
                {(activeScenario.data.length * 3 / 12).toFixed(1)} years of growth
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col">
              <div className="flex items-center text-gray-600 mb-2">
                <TrendingUp size={18} className="mr-2" />
                <h4 className="font-medium">Potential Growth</h4>
              </div>
              <p className="text-2xl font-semibold text-finance-green">
                {activeScenario.roi}% annual
              </p>
              <p className="text-sm text-gray-600 mt-auto pt-2">
                {activeScenario.frequency === "once" ? "One-time" : `${activeScenario.frequency.charAt(0).toUpperCase() + activeScenario.frequency.slice(1)}`} investment
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col">
              <div className="flex items-center text-gray-600 mb-2">
                <DollarSign size={18} className="mr-2" />
                <h4 className="font-medium">Opportunity Cost</h4>
              </div>
              <p className={`text-2xl font-semibold ${isPositive ? 'text-finance-green' : 'text-red-500'}`}>
                {isPositive ? '+' : ''}{difference.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0
                })}
              </p>
              <p className="text-sm text-gray-600 mt-auto pt-2">
                The difference between actual and potential
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100 p-4">
        <div className="flex items-center mb-3">
          <HistoryIcon size={18} className="text-finance-blue mr-2" />
          <h3 className="font-medium">Learning from the Past</h3>
        </div>
        <p className="text-sm text-gray-700">
          The Time Machine doesn't aim to create regret but to help you understand the power of small financial decisions over time. Use these insights to make more informed choices for your future financial health. Remember that financial growth compounds - small changes today can lead to significant differences years later.
        </p>
      </div>
    </div>
  );
};

export default BackwardAnalysis;
