
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
      // Light mode colors with new palette
      document.documentElement.style.setProperty('--background', '45 7% 92%'); // #ECE7DB
      document.documentElement.style.setProperty('--foreground', '160 13% 1%'); // #030504
      document.documentElement.style.setProperty('--card', '0 0% 100%'); // Pure white for cards
      document.documentElement.style.setProperty('--card-foreground', '160 13% 1%'); // #030504
      document.documentElement.style.setProperty('--primary', '35 51% 66%'); // #CDAD84
      document.documentElement.style.setProperty('--primary-foreground', '160 13% 1%'); // #030504
      document.documentElement.style.setProperty('--secondary', '160 13% 15%'); // Darker #030504
      document.documentElement.style.setProperty('--secondary-foreground', '45 7% 92%'); // #ECE7DB
      document.documentElement.style.setProperty('--muted', '35 20% 90%'); // Light brown-gray
      document.documentElement.style.setProperty('--muted-foreground', '160 13% 30%'); // Lighter than #030504
      document.documentElement.style.setProperty('--accent', '35 51% 66%'); // #CDAD84
      document.documentElement.style.setProperty('--accent-foreground', '160 13% 1%'); // #030504
      document.documentElement.style.setProperty('--border', '35 20% 85%'); // Light border
      document.documentElement.style.setProperty('--input', '45 7% 92%'); // #ECE7DB
      document.documentElement.style.setProperty('--ring', '35 51% 66%'); // #CDAD84
      // New complementary colors
      document.documentElement.style.setProperty('--success', '142 69% 58%'); // Green
      document.documentElement.style.setProperty('--warning', '35 90% 55%'); // Darker orange
      document.documentElement.style.setProperty('--info', '209 100% 60%'); // Blue
    } else {
      // Dark mode colors with new palette
      document.documentElement.style.setProperty('--background', '160 13% 3%'); // Near black version of #030504
      document.documentElement.style.setProperty('--foreground', '45 7% 92%'); // #ECE7DB
      document.documentElement.style.setProperty('--card', '160 13% 7%'); // Darker #030504
      document.documentElement.style.setProperty('--card-foreground', '45 7% 92%'); // #ECE7DB
      document.documentElement.style.setProperty('--primary', '35 51% 66%'); // #CDAD84
      document.documentElement.style.setProperty('--primary-foreground', '160 13% 3%'); // Near black
      document.documentElement.style.setProperty('--secondary', '45 7% 92%'); // #ECE7DB
      document.documentElement.style.setProperty('--secondary-foreground', '160 13% 7%'); // Darker #030504
      document.documentElement.style.setProperty('--muted', '160 13% 15%'); // Muted dark
      document.documentElement.style.setProperty('--muted-foreground', '35 30% 75%'); // Light version of #CDAD84
      document.documentElement.style.setProperty('--accent', '35 51% 66%'); // #CDAD84
      document.documentElement.style.setProperty('--accent-foreground', '160 13% 3%'); // Near black
      document.documentElement.style.setProperty('--border', '160 13% 20%'); // Subtle border
      document.documentElement.style.setProperty('--input', '160 13% 10%'); // Dark input
      document.documentElement.style.setProperty('--ring', '35 51% 66%'); // #CDAD84
      // New complementary colors
      document.documentElement.style.setProperty('--success', '142 69% 48%'); // Darker green
      document.documentElement.style.setProperty('--warning', '35 80% 50%'); // Darker orange
      document.documentElement.style.setProperty('--info', '209 100% 50%'); // Darker blue
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
