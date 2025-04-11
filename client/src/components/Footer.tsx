
import { Link } from "react-router-dom";
import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-xl gradient-text mb-4">Financial Time Machine</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              See your future. Own your decisions. Our interactive financial visualization tool helps you explore possible futures based on your financial choices.
            </p>
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-finance-green dark:text-green-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Privacy-First: Your data never leaves your device</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-blue-400">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-blue-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/ai-chat" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-blue-400">
                  AI Advisor
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-first" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-blue-400">
                  Privacy-First Approach
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-blue-400">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Financial Time Machine. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for your financial future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
