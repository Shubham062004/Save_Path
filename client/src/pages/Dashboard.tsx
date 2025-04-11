
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinancialInputDashboard from "@/components/dashboard/FinancialInputDashboard";
import FutureProjections from "@/components/dashboard/FutureProjections";
import WhatIfScenarios from "@/components/dashboard/WhatIfScenarios";
import BehaviorAnalytics from "@/components/dashboard/BehaviorAnalytics";
import BackwardAnalysis from "@/components/dashboard/BackwardAnalysis";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, LockIcon, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="gradient-text">Your Financial Dashboard</span>
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-lg px-3 py-1 text-sm">
                <LockIcon size={16} className="text-finance-green dark:text-green-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">Private & Secure</span>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-1 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                <Download size={16} />
                <span>Export Data</span>
              </Button>
            </div>
          </div>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full mb-4 flex justify-between items-center dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                  <span>Select Dashboard View</span>
                  <Menu size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] dark:bg-gray-900 dark:text-white dark:border-gray-700">
                <div className="py-4 flex flex-col gap-2">
                  <Button variant="ghost" className="justify-start dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => document.getElementById('input-tab')?.click()}>Input</Button>
                  <Button variant="ghost" className="justify-start dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => document.getElementById('projections-tab')?.click()}>Projections</Button>
                  <Button variant="ghost" className="justify-start dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => document.getElementById('whatif-tab')?.click()}>What If</Button>
                  <Button variant="ghost" className="justify-start dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => document.getElementById('behavior-tab')?.click()}>Analytics</Button>
                  <Button variant="ghost" className="justify-start dark:text-gray-200 dark:hover:bg-gray-800" onClick={() => document.getElementById('backward-tab')?.click()}>Time Machine</Button>
                </div>
              </SheetContent>
            </Sheet>
          ) : null}
          
          <Tabs defaultValue="input" className="w-full">
            <TabsList className={`grid ${isMobile ? 'hidden' : 'grid-cols-3 md:grid-cols-5'} mb-6`}>
              <TabsTrigger id="input-tab" value="input">Input</TabsTrigger>
              <TabsTrigger id="projections-tab" value="projections">Projections</TabsTrigger>
              <TabsTrigger id="whatif-tab" value="whatif">What If</TabsTrigger>
              <TabsTrigger id="behavior-tab" value="behavior">Analytics</TabsTrigger>
              <TabsTrigger id="backward-tab" value="backward">Time Machine</TabsTrigger>
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
            
            <TabsContent value="behavior" className="animate-fade-in">
              <BehaviorAnalytics />
            </TabsContent>
            
            <TabsContent value="backward" className="animate-fade-in">
              <BackwardAnalysis />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
