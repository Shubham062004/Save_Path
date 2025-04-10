
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, MessageSquare, Send, UserCircle, ChevronLeft, ChevronRight, Info } from "lucide-react";

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
};

const predefinedResponses = [
  {
    pattern: "retire",
    response: "Based on your current savings rate and investment strategy, you can reach your retirement goal of $1,000,000 by age 62. If you increase your monthly contributions by $200, you could retire 3 years earlier. Would you like to see a detailed breakdown?"
  },
  {
    pattern: "invest",
    response: "Looking at your financial profile, I recommend diversifying your investments with 60% in low-cost index funds, 30% in bonds, and 10% in a high-yield savings account. This balanced approach aligns with your moderate risk tolerance and long-term goals."
  },
  {
    pattern: "save",
    response: "I've analyzed your expenses and found potential savings of $320 monthly. The biggest opportunities are: reducing dining out ($120/month), optimizing subscriptions ($80/month), and reviewing your phone/internet plans ($70/month). I can help create a savings plan if you'd like."
  },
  {
    pattern: "budget",
    response: "A healthy budget typically follows the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings/debt. Currently, you're at 60/35/5, which explains why your savings are growing slowly. Let's work on adjusting these percentages."
  },
  {
    pattern: "mortgage",
    response: "Based on your income and existing debt, you could qualify for a mortgage of approximately $320,000. With current interest rates and a 20% down payment, your monthly payment would be around $1,500 including taxes and insurance."
  },
  {
    pattern: "debt",
    response: "I recommend prioritizing your debt repayment using the avalanche method - focusing on high-interest debt first. By allocating an extra $200 monthly to your highest interest debt, you could be debt-free 2 years sooner and save $3,400 in interest."
  }
];

const defaultMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    text: "Hello! I'm your AI Financial Advisor. I can help with budgeting, investment strategies, retirement planning, and more. What would you like to discuss today?",
    timestamp: new Date()
  }
];

const FinancialAdvisor = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newUserMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");
    setIsTyping(true);
    
    // Simulate AI response typing
    setTimeout(() => {
      const aiResponse = getAIResponse(inputMessage);
      const newAIMessage: Message = {
        id: messages.length + 2,
        sender: "ai",
        text: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newAIMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const getAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    // Check for matches with predefined responses
    for (const item of predefinedResponses) {
      if (lowerInput.includes(item.pattern)) {
        return item.response;
      }
    }
    
    // Default responses if no pattern matches
    const defaultResponses = [
      "Based on your financial data, I recommend increasing your emergency fund to cover 6 months of expenses. This would provide better financial security.",
      "Looking at your spending patterns, you could optimize your budget by reducing discretionary spending by about 15% and redirecting those funds to your investment accounts.",
      "Have you considered setting up automatic transfers to your savings account? Even small regular contributions can significantly impact your long-term financial health.",
      "Your debt-to-income ratio is currently at a healthy level. However, focusing on paying down your highest interest debt first could save you money in the long run.",
      "I notice you haven't set specific financial goals yet. Would you like help creating SMART financial goals for the short and long term?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };
  
  const suggestedQuestions = [
    "How can I optimize my retirement savings?",
    "What investment strategy would work for me?",
    "How can I save more each month?",
    "Help me create a better budget",
    "How much mortgage can I qualify for?",
    "What's the best way to pay off my debt?"
  ];
  
  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">AI Financial Advisor</h2>
        <p className="text-gray-600">Get personalized financial advice based on your data and goals.</p>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-finance-blue-light/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <BrainCircuit size={22} className="text-finance-blue" />
            </div>
            <div>
              <h3 className="font-medium">Financial Assistant</h3>
              <p className="text-xs text-gray-500">Powered by AI</p>
            </div>
          </div>
          <div className="flex items-center bg-green-100 px-2 py-1 rounded text-xs text-green-700">
            <Info size={12} className="mr-1" />
            <span>All advice stays private on your device</span>
          </div>
        </div>
        
        <div className="h-[350px] overflow-y-auto p-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === "ai" && (
                <div className="bg-finance-blue-light/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <BrainCircuit size={16} className="text-finance-blue" />
                </div>
              )}
              
              <div 
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender === 'ai' 
                    ? 'bg-white border border-gray-100 text-gray-800' 
                    : 'bg-finance-blue text-white'
                }`}
              >
                <p>{message.text}</p>
                <div className={`text-xs mt-1 ${message.sender === 'ai' ? 'text-gray-500' : 'text-blue-100'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              
              {message.sender === "user" && (
                <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                  <UserCircle size={16} className="text-gray-600" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex mb-4">
              <div className="bg-finance-blue-light/30 w-8 h-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                <BrainCircuit size={16} className="text-finance-blue" />
              </div>
              <div className="bg-white border border-gray-100 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center">
            <Textarea 
              placeholder="Ask about your financial future..."
              className="resize-none" 
              value={inputMessage} 
              onChange={(e) => setInputMessage(e.target.value)} 
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button 
              className="ml-2 bg-finance-blue hover:bg-finance-blue-dark"
              onClick={handleSendMessage}
            >
              <Send size={18} />
            </Button>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Suggested Questions</p>
              <div className="flex">
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                  <ChevronLeft size={16} />
                </Button>
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm"
                  className="text-xs"
                  onClick={() => {
                    setInputMessage(question);
                  }}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-100 p-4">
        <div className="flex items-center mb-2">
          <MessageSquare size={18} className="text-finance-blue mr-2" />
          <h3 className="font-medium">How Our AI Advisor Helps You</h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start">
            <div className="h-2 w-2 rounded-full bg-finance-blue mt-1.5 mr-2"></div>
            <p>Analyzes your financial data to provide tailored recommendations</p>
          </li>
          <li className="flex items-start">
            <div className="h-2 w-2 rounded-full bg-finance-blue mt-1.5 mr-2"></div>
            <p>Suggests optimization strategies for savings, investments, and debt</p>
          </li>
          <li className="flex items-start">
            <div className="h-2 w-2 rounded-full bg-finance-blue mt-1.5 mr-2"></div>
            <p>Helps identify financial inefficiencies and opportunities</p>
          </li>
          <li className="flex items-start">
            <div className="h-2 w-2 rounded-full bg-finance-blue mt-1.5 mr-2"></div>
            <p>Offers guidance on reaching your financial goals faster</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialAdvisor;
