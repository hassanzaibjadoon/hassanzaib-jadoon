
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full w-9 h-9 transition-smooth ${
        theme === "light" 
          ? "border-gray-400 bg-white hover:bg-gray-100 shadow-sm" 
          : "border-gray-700 bg-gray-800 hover:bg-gray-700 shadow-md"
      }`}
    >
      {theme === "light" ? 
        <Moon size={18} className="text-gray-800" /> : 
        <Sun size={18} className="text-yellow-300" />
      }
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
