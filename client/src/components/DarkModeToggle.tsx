
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed bottom-5 right-20 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="w-14 h-14 rounded-full shadow-lg transition-all bg-background border-primary dark:border-primary"
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-400 transition-transform hover:rotate-45 duration-300" />
              ) : (
                <Moon className="h-6 w-6 transition-transform hover:scale-110 duration-300" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Toggle {isDarkMode ? "Light" : "Dark"} Mode</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DarkModeToggle;
