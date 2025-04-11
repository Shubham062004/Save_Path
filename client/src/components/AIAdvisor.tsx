
import { BrainCircuit, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAdvisor = () => {
  return (
    <section className="py-16 md:py-24 bg-finance-green-light/30 dark:bg-gray-800 transition-colors duration-300" id="ai-advisor">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Meet Your AI Financial Advisor</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get personalized financial insights and recommendations based on your goals and scenarios.
            </p>
          </div>

          <div className="glass-card p-8 md:p-10 mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <BrainCircuit size={24} className="text-finance-blue dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Financial Time Assistant</h3>
                <p className="text-gray-600 dark:text-gray-400">Your personal financial guide</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700 mb-4">
              <div className="flex mb-3">
                <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <BrainCircuit size={16} className="text-finance-blue dark:text-blue-400" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%] ai-message">
                  <p className="text-gray-700 dark:text-gray-200">
                    Based on your savings rate and investment strategy, I notice you could reach your retirement goal 5 years earlier by increasing your monthly investments by just ₹15,000.
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <BrainCircuit size={16} className="text-finance-blue dark:text-blue-400" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%] ai-message">
                  <p className="text-gray-700 dark:text-gray-200">
                    Would you like me to show you how this change would affect your financial timeline?
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-finance-blue-light dark:bg-blue-900 rounded-lg p-3 max-w-[80%]">
                  <p className="text-finance-blue-dark dark:text-blue-200">
                    Yes, please show me how that would look.
                  </p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center ml-3">
                  <span className="text-gray-700 dark:text-gray-200 text-sm">You</span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Ask about your financial future..."
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-finance-blue dark:focus:ring-blue-500 focus:border-finance-blue dark:focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <MessageSquare size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              </div>
              <Button className="ml-2 bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700">
                Send
              </Button>
            </div>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-lg p-4 flex items-start">
            <ShieldCheck size={24} className="text-finance-green dark:text-green-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Privacy Guarantee</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your conversations with our AI advisor are completely private. All processing happens on your device, and your financial data is never shared, stored, or used for any purpose other than providing you with personalized advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
