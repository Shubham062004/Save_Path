
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { 
  BarChart3, 
  SparkleIcon, 
  Calendar, 
  BrainCircuit, 
  ArrowLeftRight, 
  Clock, 
  Shield, 
  LineChart 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresData = [
    {
      icon: BarChart3,
      title: "Financial Input Dashboard",
      description: "Input your current salary, expenses, savings, investments, and financial goals. Our intuitive dashboard makes it easy to track your financial status at a glance."
    },
    {
      icon: SparkleIcon,
      title: "What If Scenarios",
      description: "Explore the impact of different life decisions: career changes, major purchases, investing in assets, or family planning. See how each choice affects your financial future."
    },
    {
      icon: Calendar,
      title: "Timeline Visualization",
      description: "View your financial journey on an interactive timeline that shows past, present, and future states based on your inputs and chosen scenarios."
    },
    {
      icon: BrainCircuit,
      title: "AI Financial Advisor",
      description: "Get personalized financial advice based on your goals and data. Our AI assistant provides actionable insights to optimize your financial decisions."
    },
    {
      icon: ArrowLeftRight,
      title: "Behavior Analytics",
      description: "Analyze your spending patterns and financial behaviors. Uncover insights about your habits and receive suggestions for improvement."
    },
    {
      icon: Clock,
      title: "Real-Time Projections",
      description: "See how your financial decisions today impact your future in real-time with dynamic projections for 1, 5, and 10 years ahead."
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Your financial data never leaves your device. We don't store, sell, or share your information with any third parties or financial institutions."
    },
    {
      icon: LineChart,
      title: "Backward Analysis",
      description: "Explore the opportunity cost of past decisions and learn from them. See how different choices in the past could have affected your current financial situation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Financial Time Machine Features</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover how our tools can help you visualize and plan multiple financial futures with confidence and privacy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuresData.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">How It Works</h2>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-finance-blue dark:text-blue-400 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Input Your Financial Data</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Enter your current financial status, including income, expenses, savings, investments, and financial goals.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-finance-blue dark:text-blue-400 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Create "What If" Scenarios</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Simulate different financial decisions and see how they affect your future. Try career changes, major purchases, or investment strategies.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-finance-blue dark:text-blue-400 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Visualize Multiple Futures</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      See projected outcomes through interactive charts and timelines, comparing different scenarios side by side.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-finance-blue dark:text-blue-400 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Get AI-Powered Insights</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Receive personalized suggestions from our AI advisor to optimize your financial decisions and reach your goals faster.
                    </p>
                  </div>
                </li>
              </ol>
              
              <div className="mt-8 text-center">
                <Button className="bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                  <Link to="/dashboard" className="flex items-center">
                    <span>Try it now</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
