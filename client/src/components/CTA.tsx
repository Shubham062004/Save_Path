
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-finance-blue/10 to-finance-green-light/20 dark:from-blue-900/30 dark:to-green-900/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Ready to Explore Your Financial Future?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Start visualizing alternate financial paths today and make informed decisions for a brighter financial tomorrow.
          </p>
          <Button className="bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-6 px-8 text-lg">
            <span>Try Financial Time Machine Now</span>
            <ArrowRight size={20} className="ml-2" />
          </Button>
          <p className="mt-6 text-gray-500 dark:text-gray-400">
            No signup required. Your data never leaves your device.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
