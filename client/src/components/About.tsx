
import { Shield, TrendingUp, LineChart, Lock } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-finance-blue-light/20" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">About Financial Time Machine</span>
            </h2>
            <p className="text-xl text-gray-600">
              We help you visualize the impact of your financial decisions over time.
            </p>
          </div>
          
          <div className="glass-card p-8 md:p-10 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Financial Time Machine was created to help people understand how their financial decisions today can shape their future. We believe that everyone deserves access to tools that can help them make informed financial choices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By visualizing potential financial futures, we empower you to take control of your financial journey and make decisions with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <div className="flex items-start mb-4">
                <div className="bg-finance-blue-light/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <Shield size={20} className="text-finance-blue" />
                </div>
                <h3 className="text-xl font-semibold">Privacy First</h3>
              </div>
              <p className="text-gray-600">
                Your financial data never leaves your device. We prioritize your privacy and security above all else.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start mb-4">
                <div className="bg-finance-blue-light/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp size={20} className="text-finance-blue" />
                </div>
                <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
              </div>
              <p className="text-gray-600">
                Our visualizations are based on sophisticated financial models that help you see the long-term impact of your decisions.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start mb-4">
                <div className="bg-finance-blue-light/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <LineChart size={20} className="text-finance-blue" />
                </div>
                <h3 className="text-xl font-semibold">Interactive Visualizations</h3>
              </div>
              <p className="text-gray-600">
                Explore interactive charts and timelines that make complex financial concepts easy to understand.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start mb-4">
                <div className="bg-finance-blue-light/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <Lock size={20} className="text-finance-blue" />
                </div>
                <h3 className="text-xl font-semibold">No Account Required</h3>
              </div>
              <p className="text-gray-600">
                Start using Financial Time Machine immediately—no signup, no account creation, and no data collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
