
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the old theme class and add the new one
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    // Save the theme preference to localStorage
    localStorage.setItem("theme", theme);

    // Apply the new color palette with enhanced colors
    if (theme === "light") {
      // Light mode colors with improved palette
      document.documentElement.style.setProperty('--background', '0 0% 97%'); // Slightly off-white #f7f7f7
      document.documentElement.style.setProperty('--foreground', '220 39% 16%'); // Refined #14213d
      document.documentElement.style.setProperty('--card', '0 0% 100%'); // Pure white for cards
      document.documentElement.style.setProperty('--card-foreground', '220 39% 16%'); // #14213d
      document.documentElement.style.setProperty('--primary', '36 100% 53%'); // #fca311
      document.documentElement.style.setProperty('--primary-foreground', '220 39% 16%'); // #14213d
      document.documentElement.style.setProperty('--secondary', '220 39% 16%'); // #14213d
      document.documentElement.style.setProperty('--secondary-foreground', '0 0% 97%'); // #f7f7f7
      document.documentElement.style.setProperty('--muted', '220 20% 94%'); // Light blue-gray
      document.documentElement.style.setProperty('--muted-foreground', '220 39% 30%'); // Lighter than #14213d
      document.documentElement.style.setProperty('--accent', '36 100% 53%'); // #fca311
      document.documentElement.style.setProperty('--accent-foreground', '0 0% 0%'); // #000000
      document.documentElement.style.setProperty('--border', '220 20% 88%'); // Light border
      document.documentElement.style.setProperty('--input', '0 0% 92%'); // Input background
      document.documentElement.style.setProperty('--ring', '36 100% 53%'); // #fca311
      // New complementary colors
      document.documentElement.style.setProperty('--success', '142 69% 58%'); // Green
      document.documentElement.style.setProperty('--warning', '36 100% 53%'); // Orange #fca311
      document.documentElement.style.setProperty('--info', '209 100% 60%'); // Blue
    } else {
      // Dark mode colors with improved palette
      document.documentElement.style.setProperty('--background', '0 0% 7%'); // Near black #121212
      document.documentElement.style.setProperty('--foreground', '0 0% 96%'); // Off-white #f5f5f5
      document.documentElement.style.setProperty('--card', '220 39% 13%'); // Darker #14213d
      document.documentElement.style.setProperty('--card-foreground', '0 0% 96%'); // #f5f5f5
      document.documentElement.style.setProperty('--primary', '36 100% 53%'); // #fca311
      document.documentElement.style.setProperty('--primary-foreground', '0 0% 7%'); // #121212
      document.documentElement.style.setProperty('--secondary', '0 0% 92%'); // Light gray #eaeaea
      document.documentElement.style.setProperty('--secondary-foreground', '220 39% 16%'); // #14213d
      document.documentElement.style.setProperty('--muted', '220 39% 20%'); // Muted navy
      document.documentElement.style.setProperty('--muted-foreground', '0 0% 80%'); // Light gray
      document.documentElement.style.setProperty('--accent', '36 100% 53%'); // #fca311
      document.documentElement.style.setProperty('--accent-foreground', '0 0% 7%'); // #121212
      document.documentElement.style.setProperty('--border', '220 39% 25%'); // Subtle border
      document.documentElement.style.setProperty('--input', '220 39% 16%'); // #14213d
      document.documentElement.style.setProperty('--ring', '36 100% 53%'); // #fca311
      // New complementary colors
      document.documentElement.style.setProperty('--success', '142 69% 48%'); // Darker green
      document.documentElement.style.setProperty('--warning', '36 100% 48%'); // Darker orange
      document.documentElement.style.setProperty('--info', '209 100% 50%'); // Darker blue
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
