
import { BarChart3, Calendar, SparkleIcon, ArrowLeftRight, Clock, BrainCircuit } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Interactive Dashboard",
      description: "Enter your salary, expenses, and financial goals in our easy-to-use dashboard.",
    },
    {
      icon: SparkleIcon,
      title: "What If Scenarios",
      description: "Explore how career changes, major purchases, or new investments affect your future.",
    },
    {
      icon: Calendar,
      title: "Timeline Visualization",
      description: "See your financial past, present, and possible futures on an interactive timeline.",
    },
    {
      icon: BrainCircuit,
      title: "AI Financial Advisor",
      description: "Get personalized tips and insights based on your financial goals and scenarios.",
    },
    {
      icon: ArrowLeftRight,
      title: "Backward Analysis",
      description: "Discover the impact of past decisions and learn what could have been.",
    },
    {
      icon: Clock,
      title: "Real-Time Projections",
      description: "Instantly visualize how your decisions today shape your financial tomorrow.",
    },
  ];

  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our tools designed to help you visualize and plan your financial journey with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
