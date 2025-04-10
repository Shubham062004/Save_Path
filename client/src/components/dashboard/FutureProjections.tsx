
import { useState } from "react";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Calendar, TrendingUp } from "lucide-react";

// Sample data for demonstration purposes
const defaultData = [
  { year: "2023", savings: 15000, investments: 25000, loans: 50000 },
  { year: "2024", savings: 25000, investments: 32000, loans: 45000 },
  { year: "2025", savings: 35000, investments: 40000, loans: 40000 },
  { year: "2026", savings: 45000, investments: 50000, loans: 35000 },
  { year: "2027", savings: 60000, investments: 65000, loans: 30000 },
  { year: "2028", savings: 78000, investments: 85000, loans: 25000 },
  { year: "2029", savings: 95000, investments: 110000, loans: 20000 },
  { year: "2030", savings: 115000, investments: 145000, loans: 15000 },
  { year: "2031", savings: 140000, investments: 190000, loans: 10000 },
  { year: "2032", savings: 168000, investments: 245000, loans: 5000 },
  { year: "2033", savings: 200000, investments: 310000, loans: 0 },
];

const FutureProjections = () => {
  const [projection, setProjection] = useState<"1year" | "5year" | "10year">("5year");
  const [showDetails, setShowDetails] = useState(false);
  
  // Filter data based on projection timeframe
  const getProjectionData = () => {
    switch (projection) {
      case "1year":
        return defaultData.slice(0, 2);
      case "5year":
        return defaultData.slice(0, 6);
      case "10year":
      default:
        return defaultData;
    }
  };

  const data = getProjectionData();
  const netWorthByYear = data.map(item => ({
    year: item.year,
    netWorth: item.savings + item.investments - item.loans
  }));

  // Calculate the growth percentage for net worth
  const startNetWorth = netWorthByYear[0].netWorth;
  const endNetWorth = netWorthByYear[netWorthByYear.length - 1].netWorth;
  const growthPercentage = ((endNetWorth - startNetWorth) / startNetWorth) * 100;
  
  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Future Projections</h2>
            <p className="text-gray-600">See how your finances could grow over time.</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button 
              variant={projection === "1year" ? "default" : "outline"} 
              size="sm"
              onClick={() => setProjection("1year")}
              className={projection === "1year" ? "bg-finance-blue hover:bg-finance-blue-dark" : ""}
            >
              1 Year
            </Button>
            <Button 
              variant={projection === "5year" ? "default" : "outline"} 
              size="sm"
              onClick={() => setProjection("5year")}
              className={projection === "5year" ? "bg-finance-blue hover:bg-finance-blue-dark" : ""}
            >
              5 Years
            </Button>
            <Button 
              variant={projection === "10year" ? "default" : "outline"} 
              size="sm"
              onClick={() => setProjection("10year")}
              className={projection === "10year" ? "bg-finance-blue hover:bg-finance-blue-dark" : ""}
            >
              10 Years
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-finance-blue mr-2" />
              <h3 className="font-medium">Projected Net Worth Growth</h3>
            </div>
            <div className="flex items-center text-finance-green font-semibold">
              +{growthPercentage.toFixed(1)}%
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={netWorthByYear} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis 
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Tooltip 
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Net Worth']}
                  labelFormatter={(label) => `Year: ${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="netWorth" 
                  stroke="#4CAF50" 
                  fill="#F2FCE2" 
                  name="Net Worth"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          onClick={() => setShowDetails(!showDetails)} 
          className="flex items-center w-full justify-center"
        >
          {showDetails ? (
            <>
              <span>Show Less Details</span>
              <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              <span>Show More Details</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        
        {showDetails && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <h3 className="font-medium mb-4">Savings & Investments Growth</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
                      labelFormatter={(label) => `Year: ${label}`}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="savings" 
                      stackId="1"
                      stroke="#8884d8" 
                      fill="#E5DEFF" 
                      name="Savings"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="investments" 
                      stackId="2"
                      stroke="#33C3F0" 
                      fill="#D3E4FD" 
                      name="Investments"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <h3 className="font-medium mb-4">Loan Repayment Progress</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
                      labelFormatter={(label) => `Year: ${label}`}
                    />
                    <Legend />
                    <Bar 
                      dataKey="loans" 
                      fill="#FF6B6B" 
                      name="Outstanding Loans" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <Calendar className="h-5 w-5 text-finance-blue mr-2" />
          <h3 className="font-medium">Key Financial Milestones</h3>
        </div>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-finance-green mr-2"></div>
            <span>2026: Loans reduced by 50%</span>
          </li>
          <li className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-finance-blue mr-2"></div>
            <span>2028: Net worth crosses $100,000</span>
          </li>
          <li className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
            <span>2031: Investments double in value</span>
          </li>
          <li className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
            <span>2033: Completely debt-free</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FutureProjections;
