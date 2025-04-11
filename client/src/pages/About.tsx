
import { 
  Shield, 
  TrendingUp, 
  LineChart, 
  Lock, 
  Award, 
  Users, 
  Clock,
  BarChart4 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">About Financial Time Machine</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  We help you visualize the impact of your financial decisions across time.
                </p>
              </div>
              
              <div className="glass-card p-8 md:p-10 mb-12">
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Our Story</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Financial Time Machine was created to address a fundamental challenge in personal finance: the difficulty of visualizing how today's financial decisions affect tomorrow's outcomes. We believe that by making these connections visible and interactive, we can help people make better financial choices.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Our team combines expertise in financial planning, data visualization, and behavioral economics to create tools that make complex financial concepts accessible and actionable.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  We built Financial Time Machine on three core principles: clarity through visualization, personalization through data, and absolute privacy for our users.
                </p>
              </div>
              
              <div className="glass-card p-8 md:p-10 mb-12">
                <h3 className="text-2xl font-semibold mb-6 dark:text-white">Our Mission</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Financial Time Machine was created to help people understand how their financial decisions today can shape their future. We believe that everyone deserves access to tools that can help them make informed financial choices.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  By visualizing potential financial futures, we empower you to take control of your financial journey and make decisions with confidence.
                </p>
                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Award size={24} className="text-finance-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 dark:text-white">Our Values</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Transparency, privacy, and user empowerment guide everything we do. We're committed to creating tools that serve people, not financial institutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Users size={24} className="text-finance-blue dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 dark:text-white">Our Users</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        From young professionals to retirees, our tools help anyone who wants to take control of their financial future through informed decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <Shield size={20} className="text-finance-blue dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">Privacy First</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your financial data never leaves your device. We prioritize your privacy and security above all else.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <TrendingUp size={20} className="text-finance-blue dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">Data-Driven Insights</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our visualizations are based on sophisticated financial models that help you see the long-term impact of your decisions.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <LineChart size={20} className="text-finance-blue dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">Interactive Visualizations</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Explore interactive charts and timelines that make complex financial concepts easy to understand.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <Lock size={20} className="text-finance-blue dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">No Account Required</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start using Financial Time Machine immediately—no signup, no account creation, and no data collection.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <Clock size={20} className="text-finance-blue dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">Time Travel Analysis</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Look back at past decisions to understand their impact, and project forward to see how today's choices shape your future.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <BarChart4 size={20} className="text-finance-blue dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">Behavior Analytics</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Understand your financial behavior patterns and get personalized suggestions for improvement.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700">
                  <Link to="/dashboard" className="flex items-center">
                    <span>Try Financial Time Machine</span>
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

export default About;
