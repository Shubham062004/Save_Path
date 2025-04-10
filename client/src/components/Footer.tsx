
import { Link } from "react-router-dom";
import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-xl gradient-text mb-4">Financial Time Machine</h3>
            <p className="text-gray-600 mb-4">
              See your future. Own your decisions. Our interactive financial visualization tool helps you explore possible futures based on your financial choices.
            </p>
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-finance-green" />
              <span className="text-sm text-gray-600">Privacy-First: Your data never leaves your device</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-gray-600 hover:text-finance-blue">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-600 hover:text-finance-blue">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#try-it-now" className="text-gray-600 hover:text-finance-blue">
                  Try It Now
                </Link>
              </li>
              <li>
                <Link to="/#ai-advisor" className="text-gray-600 hover:text-finance-blue">
                  AI Advisor
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#privacy" className="text-gray-600 hover:text-finance-blue">
                  Privacy Statement
                </Link>
              </li>
              <li>
                <Link to="/#terms" className="text-gray-600 hover:text-finance-blue">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Financial Time Machine. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for your financial future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
