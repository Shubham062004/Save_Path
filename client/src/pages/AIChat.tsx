import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { 
  BrainCircuit, 
  Send, 
  UserCircle, 
  MessageSquare, 
  ChevronDown, 
  Plus, 
  Settings, 
  LogOut, 
  Shield 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
};

type ChatSession = {
  id: number;
  title: string;
  lastUpdated: Date;
  messages: Message[];
};

const AIChat = () => {
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    const savedSessions = localStorage.getItem("chat-sessions");
    return savedSessions ? JSON.parse(savedSessions) : [];
  });
  
  const [activeSessionId, setActiveSessionId] = useState<number | null>(() => {
    const savedActiveId = localStorage.getItem("active-session-id");
    return savedActiveId ? parseInt(savedActiveId) : null;
  });
  
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Default AI responses based on financial topics
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
  
  // Get default messages for a new chat
  const getDefaultMessages = (): Message[] => [
    {
      id: 1,
      sender: "ai",
      text: "Hello! I'm your AI Financial Advisor. I can help with budgeting, investment strategies, retirement planning, and more. What would you like to discuss today?",
      timestamp: new Date()
    }
  ];
  
  // Create a new chat session
  const createNewSession = () => {
    const newSession: ChatSession = {
      id: Date.now(),
      title: "New Chat",
      lastUpdated: new Date(),
      messages: getDefaultMessages()
    };
    
    setSessions(prev => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
    setInputMessage("");
  };
  
  // Get AI response based on user input
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
  
  // Handle sending a message
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // If no active session, create one
    if (activeSessionId === null) {
      createNewSession();
      return;
    }
    
    const newUserMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: inputMessage,
      timestamp: new Date()
    };
    
    // Update current session
    const updatedSessions = sessions.map(session => {
      if (session.id === activeSessionId) {
        // Update session title based on first user message if still default
        const title = session.title === "New Chat" 
          ? inputMessage.length > 30 
            ? inputMessage.substring(0, 30) + "..." 
            : inputMessage
          : session.title;
        
        return {
          ...session,
          title,
          lastUpdated: new Date(),
          messages: [...session.messages, newUserMessage]
        };
      }
      return session;
    });
    
    setSessions(updatedSessions);
    setInputMessage("");
    setIsTyping(true);
    
    // Simulate AI response typing
    setTimeout(() => {
      const aiResponse = getAIResponse(inputMessage);
      const newAIMessage: Message = {
        id: Date.now(),
        sender: "ai",
        text: aiResponse,
        timestamp: new Date()
      };
      
      setSessions(prev => prev.map(session => {
        if (session.id === activeSessionId) {
          return {
            ...session,
            lastUpdated: new Date(),
            messages: [...session.messages, newAIMessage]
          };
        }
        return session;
      }));
      
      setIsTyping(false);
    }, 1500);
  };
  
  // Get active session messages
  const activeSessionMessages = activeSessionId 
    ? sessions.find(session => session.id === activeSessionId)?.messages || []
    : [];
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeSessionMessages, isTyping]);
  
  // Save sessions to localStorage
  useEffect(() => {
    localStorage.setItem("chat-sessions", JSON.stringify(sessions));
  }, [sessions]);
  
  // Save active session ID to localStorage
  useEffect(() => {
    if (activeSessionId !== null) {
      localStorage.setItem("active-session-id", activeSessionId.toString());
    }
  }, [activeSessionId]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-50 border-r border-gray-200">
          <div className="p-4">
            <Button 
              onClick={createNewSession} 
              className="w-full bg-finance-blue hover:bg-finance-blue-dark text-white flex items-center justify-center"
            >
              <Plus size={16} className="mr-2" />
              <span>New Chat</span>
            </Button>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            {sessions.length > 0 ? (
              <div className="space-y-1 p-2">
                {sessions.map(session => (
                  <button
                    key={session.id}
                    onClick={() => setActiveSessionId(session.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeSessionId === session.id 
                        ? "bg-finance-blue-light/30 text-finance-blue" 
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <MessageSquare 
                        size={16} 
                        className={`mr-2 ${
                          activeSessionId === session.id 
                            ? "text-finance-blue" 
                            : "text-gray-500"
                        }`} 
                      />
                      <div className="truncate text-sm">{session.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                <p>No chat history yet</p>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <UserCircle size={24} className="text-gray-700 mr-2" />
                <span className="text-sm font-medium">User</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings size={16} className="mr-2" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <LogOut size={16} className="mr-2" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-grow flex flex-col max-h-[calc(100vh-64px)]">
          {/* Mobile Header */}
          <div className="md:hidden border-b border-gray-200 p-4 flex items-center justify-between">
            <Button 
              variant="outline" 
              size="sm"
              onClick={createNewSession}
            >
              <Plus size={16} className="mr-2" />
              <span>New Chat</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MessageSquare size={16} className="mr-2" />
                  <span>History</span>
                  <ChevronDown size={16} className="ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {sessions.length > 0 ? (
                  sessions.map(session => (
                    <DropdownMenuItem 
                      key={session.id}
                      onClick={() => setActiveSessionId(session.id)}
                      className="cursor-pointer"
                    >
                      <MessageSquare size={16} className="mr-2 text-gray-500" />
                      <span className="truncate">{session.title}</span>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <div className="px-2 py-3 text-center text-gray-500">
                    <p>No chat history yet</p>
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Chat Messages */}
          {activeSessionId !== null ? (
            <>
              <div className="flex-grow overflow-y-auto p-4">
                {activeSessionMessages.map(message => (
                  <div 
                    key={message.id}
                    className={`flex mb-6 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender === "ai" && (
                      <div className="bg-finance-blue-light/30 w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <BrainCircuit size={20} className="text-finance-blue" />
                      </div>
                    )}
                    
                    <div 
                      className={`rounded-lg p-4 max-w-[80%] ${
                        message.sender === 'ai' 
                          ? 'bg-white border border-gray-100 text-gray-800' 
                          : 'bg-finance-blue text-white'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.text}</p>
                      <div className={`text-xs mt-2 ${
                        message.sender === 'ai' ? 'text-gray-500' : 'text-blue-100'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                    
                    {message.sender === "user" && (
                      <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                        <UserCircle size={20} className="text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex mb-6">
                    <div className="bg-finance-blue-light/30 w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <BrainCircuit size={20} className="text-finance-blue" />
                    </div>
                    <div className="bg-white border border-gray-100 rounded-lg p-4">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200">
                  <Textarea 
                    placeholder="Ask about your financial future..."
                    className="min-h-[60px] border-0 focus-visible:ring-0 resize-none"
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
                    className="mr-2 bg-finance-blue hover:bg-finance-blue-dark"
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                  >
                    <Send size={18} />
                  </Button>
                </div>
                
                <div className="mt-2 flex items-center justify-center">
                  <Shield size={14} className="text-finance-green mr-2" />
                  <span className="text-xs text-gray-500">Your conversations are private and stay on your device</span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center p-4">
              <BrainCircuit size={64} className="text-finance-blue-light mb-6" />
              <h2 className="text-2xl font-bold mb-2">Welcome to AI Financial Advisor</h2>
              <p className="text-gray-600 text-center max-w-md mb-8">
                Get personalized financial advice and insights based on your goals and scenarios.
              </p>
              <Button 
                onClick={createNewSession}
                className="bg-finance-blue hover:bg-finance-blue-dark text-white"
              >
                <Plus size={16} className="mr-2" />
                <span>Start a new conversation</span>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AIChat;
