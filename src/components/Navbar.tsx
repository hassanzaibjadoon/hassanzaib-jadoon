
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        isScrolled ? 'neo-blur py-3' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center gap-3"
          >
            <Avatar className="h-9 w-9 border-2 border-primary">
              <AvatarImage src="/images/Profile Picture Hassan.jpg" alt="Hassan Zaib Jadoon" />
              <AvatarFallback className="bg-secondary text-secondary-foreground">HZ</AvatarFallback>
            </Avatar>
            <span className="text-xl md:text-2xl font-serif font-semibold text-gradient">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground/80 hover:text-foreground transition-smooth link-underline font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923119541429"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:text-green-700 transition-smooth font-medium text-sm"
            >
              <MessageSquare size={16} className="mr-1" /> Chat
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="https://wa.me/923119541429"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-9 w-9 text-green-600 hover:text-green-700"
            >
              <MessageSquare size={20} />
            </a>
            <ThemeToggle />
            <button 
              className="text-foreground/80 hover:text-foreground transition-smooth"
              onClick={toggleNavbar}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden neo-blur mt-4 py-4 px-6"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground/80 hover:text-foreground transition-smooth font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
