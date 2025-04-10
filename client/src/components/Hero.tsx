
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-finance-blue-light/30 text-finance-blue-dark inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Shield size={16} className="mr-1" />
            <span>Privacy-First Financial Planner</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">What if money could show you the future?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Visualize alternate financial paths based on your current status and life decisions. Make informed choices for a brighter financial future.
          </p>
          
          <h2 className="text-2xl font-medium mb-8 text-gray-700">
            See your future. Own your decisions.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-finance-blue hover:bg-finance-blue-dark text-white py-6 px-8 text-lg">
              <span>Try it now</span>
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" className="border-finance-blue text-finance-blue hover:bg-finance-blue-light/20 py-6 px-8 text-lg">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
