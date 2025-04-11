
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { KeyboardIcon, ArrowLeftRight, ArrowRight, LineChart, Calculator } from "lucide-react";
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<"input" | "whatif" | "timeline">("input");

  const demoData = [
    { year: "2020", baseline: 3000000, whatif: 3000000 },
    { year: "2021", baseline: 3500000, whatif: 3200000 },
    { year: "2022", baseline: 4200000, whatif: 3500000 },
    { year: "2023", baseline: 4800000, whatif: 4500000 },
    { year: "2024", baseline: 5200000, whatif: 6000000 },
    { year: "2025", baseline: 5800000, whatif: 8000000 },
    { year: "2026", baseline: 6400000, whatif: 10000000 },
    { year: "2027", baseline: 7200000, whatif: 13000000 },
    { year: "2028", baseline: 8000000, whatif: 16000000 },
    { year: "2029", baseline: 9000000, whatif: 20000000 },
    { year: "2030", baseline: 10000000, whatif: 25000000 },
  ];

  // Format numbers to Indian currency format (with rupee symbol)
  const formatIndianCurrency = (amount: number) => {
    // Convert to crores and lakhs for large numbers
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else {
      return `₹${amount.toLocaleString('en-IN')}`;
    }
  };

  return (
    <section className="py-16 md:py-24" id="try-it-now">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Try Now</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the power of financial visualization and discover your alternate financial futures.
          </p>
        </div>

        <div className="glass-card max-w-5xl mx-auto overflow-hidden">
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            <button
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 text-sm font-medium ${
                activeTab === "input"
                  ? "text-finance-blue dark:text-blue-400 border-b-2 border-finance-blue dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-blue-400"
              }`}
              onClick={() => setActiveTab("input")}
            >
              <KeyboardIcon size={18} />
              <span>Input Dashboard</span>
            </button>
            <button
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 text-sm font-medium ${
                activeTab === "whatif"
                  ? "text-finance-blue dark:text-blue-400 border-b-2 border-finance-blue dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-blue-400"
              }`}
              onClick={() => setActiveTab("whatif")}
            >
              <ArrowLeftRight size={18} />
              <span>What If Simulator</span>
            </button>
            <button
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 text-sm font-medium ${
                activeTab === "timeline"
                  ? "text-finance-blue dark:text-blue-400 border-b-2 border-finance-blue dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-blue-400"
              }`}
              onClick={() => setActiveTab("timeline")}
            >
              <LineChart size={18} />
              <span>Timeline View</span>
            </button>
          </div>

          <div className="p-6">
            {activeTab === "input" && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Income & Assets</h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Annual Income</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">₹</span>
                          <input
                            type="text"
                            placeholder="60,00,000"
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:ring-finance-blue dark:focus:ring-blue-500 focus:border-finance-blue dark:focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Savings</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">₹</span>
                          <input
                            type="text"
                            placeholder="15,00,000"
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:ring-finance-blue dark:focus:ring-blue-500 focus:border-finance-blue dark:focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Monthly Investment</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">₹</span>
                          <input
                            type="text"
                            placeholder="50,000"
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:ring-finance-blue dark:focus:ring-blue-500 focus:border-finance-blue dark:focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Expenses & Goals</h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Monthly Expenses</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">₹</span>
                          <input
                            type="text"
                            placeholder="2,50,000"
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:ring-finance-blue dark:focus:ring-blue-500 focus:border-finance-blue dark:focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Retirement Goal</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 dark:text-gray-400">₹</span>
                          <input
                            type="text"
                            placeholder="10,00,00,000"
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:ring-finance-blue dark:focus:ring-blue-500 focus:border-finance-blue dark:focus:border-blue-500"
                          />
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Retirement Age</label>
                        <input
                          type="text"
                          placeholder="60"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:ring-finance-blue dark:focus:ring-blue-500 focus:border-finance-blue dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-700 dark:hover:bg-blue-800 btn-arrow-hover">
                    <span>Calculate Your Future</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "whatif" && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">What If Scenarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700 flex flex-col">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Career Change</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">What if you changed careers or got a promotion?</p>
                      <div className="mt-auto">
                        <Button variant="outline" size="sm" className="w-full border-finance-blue text-finance-blue dark:border-blue-500 dark:text-blue-400 btn-arrow-hover">
                          <Calculator size={16} className="mr-2" />
                          <span>Simulate</span>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700 flex flex-col">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Major Purchase</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">What if you bought a house or a new car?</p>
                      <div className="mt-auto">
                        <Button variant="outline" size="sm" className="w-full border-finance-blue text-finance-blue dark:border-blue-500 dark:text-blue-400 btn-arrow-hover">
                          <Calculator size={16} className="mr-2" />
                          <span>Simulate</span>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700 flex flex-col">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">New Investments</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">What if you changed your investment strategy?</p>
                      <div className="mt-auto">
                        <Button variant="outline" size="sm" className="w-full border-finance-blue text-finance-blue dark:border-blue-500 dark:text-blue-400 btn-arrow-hover">
                          <Calculator size={16} className="mr-2" />
                          <span>Simulate</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Investment Strategy Scenario</h4>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={demoData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => formatIndianCurrency(value).split(" ")[0]} />
                        <Tooltip 
                          formatter={(value) => [formatIndianCurrency(value as number), 'Value']}
                          labelFormatter={(label) => `Year: ${label}`}
                        />
                        <Area
                          type="monotone"
                          dataKey="baseline"
                          stackId="1"
                          stroke="#8884d8"
                          fill="#8884d8"
                          name="Current Path"
                        />
                        <Area
                          type="monotone"
                          dataKey="whatif"
                          stackId="2"
                          stroke="#33C3F0"
                          fill="#33C3F0"
                          name="What If Scenario"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
                    <div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#8884d8] rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Current Path</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <div className="w-3 h-3 bg-[#33C3F0] rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">What If: Increased Investment Strategy</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">10-Year Difference</p>
                      <p className="text-lg font-semibold text-finance-green dark:text-green-400">{formatIndianCurrency(15000000)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "timeline" && (
              <div className="animate-fade-in">
                <h3 className="text-lg font-medium mb-4">Financial Timeline</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 mb-6">
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={demoData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => formatIndianCurrency(value).split(" ")[0]} />
                        <Tooltip 
                          formatter={(value) => [formatIndianCurrency(value as number), 'Value']}
                          labelFormatter={(label) => `Year: ${label}`}
                        />
                        <Area
                          type="monotone"
                          dataKey="baseline"
                          stroke="#4CAF50"
                          fill="#F2FCE2"
                          name="Your Timeline"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Past</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your financial journey so far shows steady growth with an average annual increase of 15% in net worth.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Present</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your current financial status is healthy with a balanced portfolio and growing savings rate.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Future</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your projected financial path shows potential for significant growth if current habits continue.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
