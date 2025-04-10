
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinancialInputDashboard from "@/components/dashboard/FinancialInputDashboard";
import FutureProjections from "@/components/dashboard/FutureProjections";
import WhatIfScenarios from "@/components/dashboard/WhatIfScenarios";
import FinancialAdvisor from "@/components/dashboard/FinancialAdvisor";
import BehaviorAnalytics from "@/components/dashboard/BehaviorAnalytics";
import BackwardAnalysis from "@/components/dashboard/BackwardAnalysis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, LockIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              <span className="gradient-text">Your Financial Dashboard</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-white/70 backdrop-blur-sm border border-gray-100 rounded-lg px-3 py-1 text-sm">
                <LockIcon size={16} className="text-finance-green mr-2" />
                <span className="text-gray-700">Private & Secure</span>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download size={16} />
                <span>Export Data</span>
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="input" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
              <TabsTrigger value="input">Input</TabsTrigger>
              <TabsTrigger value="projections">Projections</TabsTrigger>
              <TabsTrigger value="whatif">What If</TabsTrigger>
              <TabsTrigger value="advisor">AI Advisor</TabsTrigger>
              <TabsTrigger value="behavior">Analytics</TabsTrigger>
              <TabsTrigger value="backward">Time Machine</TabsTrigger>
            </TabsList>
            
            <TabsContent value="input" className="animate-fade-in">
              <FinancialInputDashboard />
            </TabsContent>
            
            <TabsContent value="projections" className="animate-fade-in">
              <FutureProjections />
            </TabsContent>
            
            <TabsContent value="whatif" className="animate-fade-in">
              <WhatIfScenarios />
            </TabsContent>
            
            <TabsContent value="advisor" className="animate-fade-in">
              <FinancialAdvisor />
            </TabsContent>
            
            <TabsContent value="behavior" className="animate-fade-in">
              <BehaviorAnalytics />
            </TabsContent>
            
            <TabsContent value="backward" className="animate-fade-in">
              <BackwardAnalysis />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
