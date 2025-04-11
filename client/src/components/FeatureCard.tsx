
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="bg-finance-blue-light/50 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 feature-card-icon">
        <Icon size={24} className="text-finance-blue dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
