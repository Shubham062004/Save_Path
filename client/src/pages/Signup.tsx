
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, ArrowRight, Mail, Lock, User, AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      toast.error("You must accept the Terms of Service and Privacy Policy");
      return;
    }
    
    setIsLoading(true);
    
    // For demo purposes, we'll just log in with the demo credentials
    try {
      toast.success("Account created successfully! Logging in...");
      
      // Simulate a delay before redirecting
      setTimeout(async () => {
        const success = await login("user@gmail.com", "user123");
        if (success) {
          navigate("/dashboard");
        }
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    try {
      // For demo purposes only
      toast.info("This is a demo of Google authentication");
      setTimeout(async () => {
        toast.success("Account created with Google! Logging in...");
        const success = await login("user@gmail.com", "user123");
        if (success) {
          navigate("/dashboard");
        }
        setGoogleLoading(false);
      }, 1500);
    } catch (error) {
      setGoogleLoading(false);
      toast.error("Authentication failed");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 dark:text-white">Create Your Account</h1>
              <p className="text-gray-600 dark:text-gray-400">Start planning your financial future today</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 mb-6 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                onClick={handleGoogleSignup}
                disabled={googleLoading}
              >
                {googleLoading ? (
                  "Connecting..."
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                      </g>
                    </svg>
                    Continue with Google
                  </>
                )}
              </Button>
              
              <div className="relative mb-6">
                <Separator className="dark:bg-gray-700" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 text-sm text-gray-500 dark:text-gray-400">
                  or
                </span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="dark:text-gray-200">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="dark:text-gray-200">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@gmail.com"
                      className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="dark:text-gray-200">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Choose a strong password"
                      className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Checkbox 
                    id="terms" 
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                    className="mt-1 dark:border-gray-600"
                  />
                  <Label htmlFor="terms" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    I accept the <Link to="/privacy" className="text-finance-blue dark:text-blue-400 hover:underline">Privacy Policy</Link> and <Link to="#" className="text-finance-blue dark:text-blue-400 hover:underline">Terms of Service</Link>
                  </Label>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700 group"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Sign Up"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link to="/login" className="text-finance-blue dark:text-blue-400 hover:underline">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center items-center text-sm text-gray-500 dark:text-gray-400">
              <Shield className="h-4 w-4 mr-2 text-finance-green dark:text-green-400" />
              <span>Your data is secure and never leaves your device</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
