import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-sm";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-darkBlue focus:ring-brand-blue",
    secondary: "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 focus:ring-slate-200",
    outline: "bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 focus:ring-brand-blue",
    // Used specifically for CAC/Green themed actions - updated to new logo green but slightly darker for text legibility if needed, 
    // or white text on the bright green.
    green: "bg-brand-green text-white hover:bg-brand-darkGreen focus:ring-brand-green shadow-brand-green/20",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;