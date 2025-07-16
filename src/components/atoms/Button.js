import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-bold rounded-full transition duration-300 inline-block text-center cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-yellow-500 hover:bg-yellow-600 text-blue-900',
    secondary: 'bg-blue-800 hover:bg-blue-900 text-white',
    outline: 'border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white'
  };
  
  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-3 px-8 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;