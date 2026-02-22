import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <img src="/Images/logo.png" 
      alt="EJ Technologies Logo" 
      className={`${className} object-contain`}
    />
  );
};

export default Logo;