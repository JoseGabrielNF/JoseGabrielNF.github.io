import React from 'react';

const Card = ({ 
  children, 
  className = '',
  variant = 'default',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-lg overflow-hidden';
  
  const variantClasses = {
    default: 'bg-white shadow-md',
    speaker: 'bg-white shadow-lg speaker-card',
    schedule: 'bg-white shadow-md schedule-day',
    partner: 'bg-white shadow-md'
  };
  
  const hoverClasses = hover ? 'transition-all duration-300 hover:transform hover:scale-105' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;