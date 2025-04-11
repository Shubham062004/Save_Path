
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, ArrowRight, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  
  // Check if current path is dashboard
  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl gradient-text">Financial Time Machine</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/features" 
              className="text-gray-700 dark:text-gray-200 hover:text-finance-blue dark:hover:text-blue-400 transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 dark:text-gray-200 hover:text-finance-blue dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/privacy" 
              className="text-gray-700 dark:text-gray-200 hover:text-finance-blue dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-finance-green dark:text-green-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Privacy-First</span>
            </div>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1 transition-colors">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-finance-blue dark:bg-blue-700 text-white">
                          {user?.email.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium dark:text-white">{user?.email.split('@')[0]}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <Link to="/profile">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline" className="border-finance-blue text-finance-blue dark:border-blue-400 dark:text-blue-400 hover:bg-finance-blue-light/20 dark:hover:bg-blue-900/20">
                    Login
                  </Button>
                </Link>
              </div>
            )}
            
            {isDashboard ? (
              <Link to="/ai-chat">
                <Button variant="outline" className="border-finance-blue text-finance-blue dark:border-blue-400 dark:text-blue-400 hover:bg-finance-blue-light/20 dark:hover:bg-blue-900/20 group">
                  <span>AI Advisor</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            ) : (
              <Link to="/dashboard">
                <Button className="bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700 group">
                  <span>Try Now</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200"
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
                to="/features"
                className="text-gray-700 dark:text-gray-200 hover:text-finance-blue dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/about"
                className="text-gray-700 dark:text-gray-200 hover:text-finance-blue dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/privacy"
                className="text-gray-700 dark:text-gray-200 hover:text-finance-blue dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-finance-green dark:text-green-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Privacy-First</span>
              </div>
              
              {isAuthenticated ? (
                <div className="flex flex-col space-y-2">
                  <Link 
                    to="/profile" 
                    className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-finance-blue dark:bg-blue-700 text-white">
                        {user?.email.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium dark:text-white">{user?.email.split('@')[0]}</span>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full border-finance-blue text-finance-blue dark:border-blue-400 dark:text-blue-400 hover:bg-finance-blue-light/20 dark:hover:bg-blue-900/20"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-finance-blue text-finance-blue dark:border-blue-400 dark:text-blue-400 hover:bg-finance-blue-light/20 dark:hover:bg-blue-900/20">
                      Login
                    </Button>
                  </Link>
                </div>
              )}
              
              {isDashboard ? (
                <Link to="/ai-chat" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-finance-blue text-finance-blue dark:border-blue-400 dark:text-blue-400 hover:bg-finance-blue-light/20 dark:hover:bg-blue-900/20 group">
                    <span>AI Advisor</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              ) : (
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700 group">
                    <span>Try Now</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
