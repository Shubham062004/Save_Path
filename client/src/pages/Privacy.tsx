
import { Link } from "react-router-dom";
import { Shield, Lock, Check, Eye, FileText, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-finance-green-light/30 dark:bg-green-900/30 text-finance-green-dark dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Shield size={16} className="mr-1" />
                  <span>Privacy First</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Privacy Policy</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Your financial data belongs to you and only you. Here's our commitment to protecting your privacy.
                </p>
              </div>

              <div className="glass-card p-8 md:p-10 mb-12">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                    <Shield size={32} className="text-finance-green dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-center md:text-left dark:text-white">Privacy Statement</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Financial Time Machine was built with privacy as a core principle. Your financial data never leaves your device. We don't collect, store, or track any personal or financial information, and we never will.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Our Privacy Commitments:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check size={16} className="text-finance-green dark:text-green-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium dark:text-gray-200">No Data Collection</span>: We don't collect any of your financial or personal data.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check size={16} className="text-finance-green dark:text-green-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium dark:text-gray-200">Local Processing</span>: All calculations happen directly in your browser.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check size={16} className="text-finance-green dark:text-green-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium dark:text-gray-200">No Account Required</span>: Use our tool without creating an account.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check size={16} className="text-finance-green dark:text-green-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium dark:text-gray-200">No Third Parties</span>: We don't share data with third parties because we don't have any data to share.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check size={16} className="text-finance-green dark:text-green-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium dark:text-gray-200">Transparent Code</span>: Our calculations are transparent and verifiable.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check size={16} className="text-finance-green dark:text-green-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium dark:text-gray-200">Your Data, Your Control</span>: You always maintain full control over your information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 md:p-10 mb-12">
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Detailed Privacy Policy</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center dark:text-white">
                      <FileText size={20} className="text-finance-blue dark:text-blue-400 mr-2" />
                      Information We Collect
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      We do not collect, store, or process any personal information about you, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4">
                      <li>Personal identifiers (name, email, address, etc.)</li>
                      <li>Financial information (income, expenses, investments, etc.)</li>
                      <li>Usage data (how you interact with our application)</li>
                      <li>Device information (browser type, IP address, etc.)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center dark:text-white">
                      <Eye size={20} className="text-finance-blue dark:text-blue-400 mr-2" />
                      Cookies and Tracking
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      We do not use cookies, web beacons, or any other tracking technologies to monitor your activity. There are no analytics or tracking scripts in our application.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center dark:text-white">
                      <Lock size={20} className="text-finance-blue dark:text-blue-400 mr-2" />
                      How Your Data Is Stored
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Any data you input into Financial Time Machine is stored exclusively in your browser's local storage. This means:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4">
                      <li>Your data remains on your device</li>
                      <li>It is not transmitted to our servers or any third-party servers</li>
                      <li>It is automatically encrypted using your browser's security features</li>
                      <li>It will be removed if you clear your browser data or use private browsing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center dark:text-white">
                      <Info size={20} className="text-finance-blue dark:text-blue-400 mr-2" />
                      AI Financial Advisor Privacy
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Our AI Financial Advisor feature processes all data locally on your device:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4">
                      <li>The AI model runs entirely in your browser</li>
                      <li>Your conversations are stored only in your local browser storage</li>
                      <li>No data from your conversations is shared with us or third parties</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 md:p-10 mb-12">
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Business Model</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You might wonder how we sustain our service without selling your data. Financial Time Machine operates on a freemium model:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4 mb-6">
                  <li>Basic features are free for everyone to use</li>
                  <li>Advanced features are available through optional premium subscriptions</li>
                  <li>We may offer additional services or tools for a fee</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  This allows us to maintain our commitment to privacy while building a sustainable business that serves your financial planning needs.
                </p>
              </div>

              <div className="bg-finance-blue-light/20 dark:bg-blue-900/20 rounded-xl p-6 mb-12 flex items-center">
                <Lock size={24} className="text-finance-blue dark:text-blue-400 mr-4 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "Financial planning shouldn't come at the cost of your privacy. We've built a tool that respects your data while helping you visualize your financial future."
                </p>
              </div>
              
              <div className="text-center mb-8">
                <Link to="/privacy-first" className="text-finance-blue dark:text-blue-400 hover:text-finance-blue-dark dark:hover:text-blue-300 font-medium">
                  Learn more about our technical privacy measures →
                </Link>
              </div>
              
              <div className="text-center">
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

export default Privacy;
