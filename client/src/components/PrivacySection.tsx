
import { Shield, Lock, Check } from "lucide-react";

const PrivacySection = () => {
  return (
    <section className="py-16 md:py-24 transition-colors duration-300" id="privacy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-finance-blue-light/30 dark:bg-blue-900/30 text-finance-blue-dark dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Shield size={16} className="mr-1" />
              <span>Privacy First</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Your Financial Data Stays With You</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We believe your financial information is personal and should remain private. That's why we've built Financial Time Machine with privacy at its core.
            </p>
          </div>

          <div className="glass-card p-8 md:p-10 mb-12">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 privacy-icon">
                <Shield size={32} className="text-finance-green dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-center md:text-left dark:text-white">Privacy Statement</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Financial Time Machine was built with privacy as a core principle. Your financial data never leaves your device. We don't collect, store, or track any personal or financial information, and we never will.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h4 className="text-xl font-semibold mb-4 dark:text-white">Our Privacy Commitments:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 privacy-check">
                    <Check size={16} className="text-finance-green dark:text-green-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium dark:text-gray-200">No Data Collection</span>: We don't collect any of your financial or personal data.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 privacy-check">
                    <Check size={16} className="text-finance-green dark:text-green-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium dark:text-gray-200">Local Processing</span>: All calculations happen directly in your browser.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 privacy-check">
                    <Check size={16} className="text-finance-green dark:text-green-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium dark:text-gray-200">No Account Required</span>: Use our tool without creating an account.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 privacy-check">
                    <Check size={16} className="text-finance-green dark:text-green-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium dark:text-gray-200">No Third Parties</span>: We don't share data with third parties because we don't have any data to share.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 privacy-check">
                    <Check size={16} className="text-finance-green dark:text-green-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium dark:text-gray-200">Transparent Code</span>: Our calculations are transparent and verifiable.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-finance-green-light/50 dark:bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 privacy-check">
                    <Check size={16} className="text-finance-green dark:text-green-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium dark:text-gray-200">Your Data, Your Control</span>: You always maintain full control over your information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-finance-blue-light/20 dark:bg-blue-900/20 rounded-xl p-6 flex items-center">
            <Lock size={24} className="text-finance-blue dark:text-blue-400 mr-4 flex-shrink-0" />
            <p className="text-gray-700 dark:text-gray-300 italic">
              "Financial planning shouldn't come at the cost of your privacy. We've built a tool that respects your data while helping you visualize your financial future."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
