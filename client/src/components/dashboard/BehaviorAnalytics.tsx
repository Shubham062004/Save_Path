
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { LineChart, Line } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, ArrowDownRight, BarChart4, UploadCloud, ListFilter, Eye } from "lucide-react";

// Sample data for demonstration
const expenseCategories = [
  { name: "Housing", value: 1200, percentage: 40, delta: -2 },
  { name: "Food", value: 600, percentage: 20, delta: 5 },
  { name: "Transportation", value: 300, percentage: 10, delta: -8 },
  { name: "Utilities", value: 240, percentage: 8, delta: 0 },
  { name: "Entertainment", value: 210, percentage: 7, delta: 15 },
  { name: "Healthcare", value: 180, percentage: 6, delta: 3 },
  { name: "Shopping", value: 150, percentage: 5, delta: 12 },
  { name: "Others", value: 120, percentage: 4, delta: -4 },
];

const monthlyTrends = [
  { month: "Jan", amount: 2800 },
  { month: "Feb", amount: 3200 },
  { month: "Mar", amount: 2900 },
  { month: "Apr", amount: 3100 },
  { month: "May", amount: 3400 },
  { month: "Jun", amount: 3200 },
  { month: "Jul", amount: 3500 },
  { month: "Aug", amount: 3000 },
  { month: "Sep", amount: 3200 },
  { month: "Oct", amount: 3100 },
  { month: "Nov", amount: 3300 },
  { month: "Dec", amount: 3600 },
];

const unusedSubscriptions = [
  { name: "Streaming Service A", cost: 12.99, lastUsed: "3 months ago" },
  { name: "Fitness App", cost: 9.99, lastUsed: "5 months ago" },
  { name: "News Subscription", cost: 4.99, lastUsed: "2 months ago" },
  { name: "Cloud Storage", cost: 6.99, lastUsed: "4 months ago" },
];

const insights = [
  "You spend 25% more on dining out than people with similar income",
  "Your grocery spending has increased by 12% in the last 3 months",
  "You could save $35/month by optimizing your subscriptions",
  "Your highest spending day is typically Saturday",
  "Most of your impulse purchases happen between 8-10 PM"
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#4CAF50', '#FF6B6B', '#B0BEC5'];

const BehaviorAnalytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"3m" | "6m" | "1y" | "all">("6m");
  
  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Spending Analytics</h2>
            <p className="text-gray-600">Understand your spending patterns to make better financial decisions.</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="sm" 
              className="mr-2"
            >
              <UploadCloud size={16} className="mr-1" />
              <span>Upload Data</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
            >
              <ListFilter size={16} className="mr-1" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-gray-500">Monthly Spending</p>
                <h3 className="text-2xl font-semibold">$3,000</h3>
              </div>
              <div className={`flex items-center ${
                -5 < 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {-5 < 0 ? 
                  <ArrowDownRight size={16} /> : 
                  <ArrowUpRight size={16} />
                }
                <span className="text-sm font-medium">{5}%</span>
              </div>
            </div>
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrends.slice(-6)}>
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#4CAF50" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-gray-500">Top Category</p>
                <h3 className="text-2xl font-semibold">Housing</h3>
              </div>
              <div className="text-purple-500 bg-purple-100 px-2 py-1 rounded text-xs">
                40% of spending
              </div>
            </div>
            <div className="h-[80px] flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-purple-500 h-4 rounded-full" 
                  style={{ width: '40%' }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-gray-500">Savings Potential</p>
                <h3 className="text-2xl font-semibold">$320/mo</h3>
              </div>
              <div className="text-finance-blue bg-finance-blue-light/30 px-2 py-1 rounded text-xs">
                10.7% of spending
              </div>
            </div>
            <p className="text-sm text-gray-600">Based on optimizing subscriptions and reducing dining out expenses</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-100">
            <h3 className="font-medium mb-4 flex items-center">
              <BarChart4 size={18} className="text-finance-blue mr-2" />
              <span>Expense Breakdown</span>
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={expenseCategories}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `$${value}`} />
                  <YAxis type="category" dataKey="name" width={90} />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Amount']}
                  />
                  <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-100">
            <h3 className="font-medium mb-4 flex items-center">
              <Eye size={18} className="text-finance-blue mr-2" />
              <span>Spending Distribution</span>
            </h3>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4">Unused Subscriptions</h3>
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subscription</TableHead>
                  <TableHead>Monthly Cost</TableHead>
                  <TableHead>Last Used</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {unusedSubscriptions.map((subscription, index) => (
                  <TableRow key={index}>
                    <TableCell>{subscription.name}</TableCell>
                    <TableCell>${subscription.cost.toFixed(2)}</TableCell>
                    <TableCell>{subscription.lastUsed}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-3 bg-amber-50 border-t border-amber-100">
              <p className="text-amber-700 text-sm flex items-center">
                <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                <span>Potential monthly savings: $34.96</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4">Behavioral Insights</h3>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 flex">
                <div className="bg-finance-blue-light/30 h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="h-3 w-3 rounded-full bg-finance-blue"></div>
                </div>
                <p className="text-gray-700">{insight}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline">View More Insights</Button>
          </div>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Eye className="h-5 w-5 text-finance-blue mr-2" />
            <h3 className="font-medium">Privacy Note</h3>
          </div>
          <Button variant="ghost" size="sm">Learn More</Button>
        </div>
        <p className="text-sm text-gray-700">
          All analytics are performed locally on your device. Your financial data never leaves your browser and is not shared with any third parties. You can delete all stored data at any time from the settings menu.
        </p>
      </div>
    </div>
  );
};

export default BehaviorAnalytics;
