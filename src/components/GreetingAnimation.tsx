
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';

interface GreetingAnimationProps {
  redirectPath?: string;
  duration?: number;
}

const greetings = [
  "السلام علیکم",
  "Bonjour",
  "स्वागत हे",
  "Ciao",
  "Olá",
  "おい",
  "Hallå",
  "Guten tag",
  "Hallo",
  "Hello"
];

export default function GreetingAnimation({ 
  redirectPath = '/', 
  duration = 2000 
}: GreetingAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const navigate = useNavigate();
  const intervalRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    // Show the first greeting immediately
    if (showAnimation) {
      // Change greeting every 170ms
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % greetings.length);
      }, 170);

      // Redirect after the specified duration
      const redirectTimeout = setTimeout(() => {
        setShowAnimation(false);
        if (redirectPath) {
          navigate(redirectPath);
        }
      }, duration);

      return () => {
        clearInterval(intervalRef.current);
        clearTimeout(redirectTimeout);
      };
    }
  }, [navigate, redirectPath, duration, showAnimation]);

  if (!showAnimation) return null;

  // Determine text and background colors based on theme
  const bgColor = theme === 'dark' ? 'bg-[#030504]' : 'bg-[#ECE7DB]';
  const textColor = theme === 'dark' ? 'text-[#ECE7DB]' : 'text-[#030504]';
  const dotColor = theme === 'dark' ? 'bg-[#CDAD84]' : 'bg-[#CDAD84]';

  return (
    <motion.div
      className={`fixed inset-0 ${bgColor} z-50 flex justify-center items-center`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative h-[60px] flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`${textColor} text-4xl md:text-5xl font-serif whitespace-nowrap m-0 absolute`}
          >
            {greetings[currentIndex]}
            <span className={`inline-block w-2.5 h-2.5 ${dotColor} rounded-full ml-2.5 align-middle`}></span>
          </motion.h2>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
