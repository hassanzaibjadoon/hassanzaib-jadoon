
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

type MixBlendMode = 
  | 'normal' 
  | 'multiply' 
  | 'screen' 
  | 'overlay' 
  | 'darken' 
  | 'lighten' 
  | 'color-dodge' 
  | 'color-burn' 
  | 'hard-light' 
  | 'soft-light' 
  | 'difference' 
  | 'exclusion' 
  | 'hue' 
  | 'saturation' 
  | 'color' 
  | 'luminosity';

const CustomCursor = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    const handleMouseOver = () => setCursorVariant("hover");
    const handleMouseOut = () => setCursorVariant("default");

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
      const handleMouseOver = () => setCursorVariant("hover");
      const handleMouseOut = () => setCursorVariant("default");

      const hoverElements = document.querySelectorAll('a, button, input, [role="button"], .hover-trigger');
      
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseOver);
        element.addEventListener('mouseleave', handleMouseOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      mixBlendMode: 'exclusion' as MixBlendMode
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      mixBlendMode: 'exclusion' as MixBlendMode,
      width: 'var(--cursor-hover-size)',
      height: 'var(--cursor-hover-size)'
    }
  };

  return (
    <motion.div 
      className={`custom-cursor hidden md:block ${theme} ${cursorVariant === 'hover' ? 'hover' : ''}`}
      variants={cursorVariants}
      animate={cursorVariant}
      transition={{ type: 'spring', damping: 25, stiffness: 400 }}
    />
  );
};

export default CustomCursor;
