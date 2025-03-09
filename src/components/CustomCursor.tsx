
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const CustomCursor = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    const hoverElements = document.querySelectorAll('a, button, input, [role="button"], .hover-trigger');
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseOver);
      element.addEventListener('mouseleave', handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseOver);
        element.removeEventListener('mouseleave', handleMouseOut);
      });
    };
  }, []);

  // Update the cursor style when DOM changes (for dynamic elements)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const handleMouseOver = () => setIsHovering(true);
      const handleMouseOut = () => setIsHovering(false);

      const hoverElements = document.querySelectorAll('a, button, input, [role="button"], .hover-trigger');
      
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseOver);
        element.addEventListener('mouseleave', handleMouseOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`custom-cursor hidden md:block ${theme} ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`
      }}
    />
  );
};

export default CustomCursor;
