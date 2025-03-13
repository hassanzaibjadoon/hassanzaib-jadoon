
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
          ? "bg-white/95 border-primary/20 hover:bg-primary/10 hover:border-primary/30 shadow-sm" 
          : "bg-card border-primary/20 hover:bg-primary/20 hover:border-primary/40 shadow-md"
      }`}
    >
      {theme === "light" ? 
        <Moon size={18} className="text-foreground opacity-90" /> : 
        <Sun size={18} className="text-primary" />
      }
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
