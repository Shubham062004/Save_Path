
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquareText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleOpenChat = () => {
    navigate("/ai-chat");
  };
  
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-14 h-14 rounded-full shadow-lg transition-all ${
                isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-700 dark:hover:bg-blue-600"
              }`}
            >
              {isOpen ? (
                <X size={24} className="transition-transform hover:rotate-90 duration-300" />
              ) : (
                <MessageSquareText size={24} className="transition-transform hover:scale-110 duration-300" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat with AI Financial Advisor</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      {isOpen && (
        <div className="absolute bottom-20 right-0 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2 dark:text-white">AI Financial Advisor</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Ask questions about your finances and get personalized advice.
            </p>
            <Button 
              onClick={handleOpenChat}
              className="w-full bg-finance-blue hover:bg-finance-blue-dark dark:bg-blue-700 dark:hover:bg-blue-600 btn-arrow-hover group"
            >
              <span>Start Chatting</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatButton;

// Need to import ArrowRight
import { ArrowRight } from "lucide-react";
