
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GreetingAnimation from './GreetingAnimation';

interface AnimatedRouteProps {
  children: React.ReactNode;
}

export default function AnimatedRoute({ children }: AnimatedRouteProps) {
  const [showGreeting, setShowGreeting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show greeting animation only once per session
    const hasShownGreeting = sessionStorage.getItem('hasShownGreeting');
    
    if (!hasShownGreeting) {
      setShowGreeting(true);
      sessionStorage.setItem('hasShownGreeting', 'true');
    }
  }, []);

  return (
    <>
      {showGreeting && <GreetingAnimation redirectPath={location.pathname} />}
      {children}
    </>
  );
}
