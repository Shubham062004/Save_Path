
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl gradient-text">Financial Time Machine</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-700 hover:text-finance-blue transition-colors">
              Features
            </Link>
            <Link to="/#about" className="text-gray-700 hover:text-finance-blue transition-colors">
              About
            </Link>
            <Link to="/#privacy" className="text-gray-700 hover:text-finance-blue transition-colors">
              Privacy
            </Link>
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-finance-green" />
              <span className="text-sm text-gray-600">Privacy-First</span>
            </div>
            <Button className="bg-finance-blue hover:bg-finance-blue-dark">
              <span>Try it now</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/#features"
                className="text-gray-700 hover:text-finance-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/#about"
                className="text-gray-700 hover:text-finance-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#privacy"
                className="text-gray-700 hover:text-finance-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-finance-green" />
                <span className="text-sm text-gray-600">Privacy-First</span>
              </div>
              <Button className="bg-finance-blue hover:bg-finance-blue-dark w-full">
                <span>Try it now</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
