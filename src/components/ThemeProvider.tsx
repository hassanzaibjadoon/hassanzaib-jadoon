
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

    // Apply the new color palette
    if (theme === "light") {
      // Light mode colors using the specified palette
      document.documentElement.style.setProperty('--background', '0 0% 90%'); // #e5e5e5
      document.documentElement.style.setProperty('--foreground', '240 29% 16%'); // #14213d
      document.documentElement.style.setProperty('--card', '0 0% 90%'); // #e5e5e5
      document.documentElement.style.setProperty('--card-foreground', '240 29% 16%'); // #14213d
      document.documentElement.style.setProperty('--primary', '36 100% 53%'); // #fca311
      document.documentElement.style.setProperty('--primary-foreground', '240 29% 16%'); // #14213d
      document.documentElement.style.setProperty('--secondary', '240 29% 16%'); // #14213d
      document.documentElement.style.setProperty('--secondary-foreground', '0 0% 90%'); // #e5e5e5
      document.documentElement.style.setProperty('--muted', '0 0% 80%'); // Lighter than #e5e5e5
      document.documentElement.style.setProperty('--muted-foreground', '240 29% 30%'); // Lighter than #14213d
      document.documentElement.style.setProperty('--accent', '36 100% 53%'); // #fca311
      document.documentElement.style.setProperty('--accent-foreground', '0 0% 0%'); // #000000
      document.documentElement.style.setProperty('--border', '240 29% 16%'); // #14213d
      document.documentElement.style.setProperty('--input', '0 0% 90%'); // #e5e5e5
      document.documentElement.style.setProperty('--ring', '36 100% 53%'); // #fca311
    } else {
      // Dark mode colors using the specified palette
      document.documentElement.style.setProperty('--background', '0 0% 0%'); // #000000
      document.documentElement.style.setProperty('--foreground', '0 0% 90%'); // #e5e5e5
      document.documentElement.style.setProperty('--card', '240 29% 16%'); // #14213d
      document.documentElement.style.setProperty('--card-foreground', '0 0% 90%'); // #e5e5e5
      document.documentElement.style.setProperty('--primary', '36 100% 53%'); // #fca311
      document.documentElement.style.setProperty('--primary-foreground', '0 0% 0%'); // #000000
      document.documentElement.style.setProperty('--secondary', '0 0% 90%'); // #e5e5e5
      document.documentElement.style.setProperty('--secondary-foreground', '240 29% 16%'); // #14213d
      document.documentElement.style.setProperty('--muted', '240 29% 26%'); // Lighter than #14213d
      document.documentElement.style.setProperty('--muted-foreground', '0 0% 70%'); // Darker than #e5e5e5
      document.documentElement.style.setProperty('--accent', '36 100% 53%'); // #fca311
      document.documentElement.style.setProperty('--accent-foreground', '0 0% 0%'); // #000000
      document.documentElement.style.setProperty('--border', '0 0% 20%'); // Darker than #000000 for subtle borders
      document.documentElement.style.setProperty('--input', '240 29% 16%'); // #14213d
      document.documentElement.style.setProperty('--ring', '36 100% 53%'); // #fca311
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
