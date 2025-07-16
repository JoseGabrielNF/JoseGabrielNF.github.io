import React from 'react';

const Logo = ({ 
  src = "/assets/logos/ufms-logo-white.png",
  fallbackSrc = "https://cdn.ufms.br/logos/ufms_logo_negativo_rgb.png",
  alt = "UFMS Logo",
  className = '',
  size = 'medium',
  ...props 
}) => {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16'
  };

  const classes = `${sizeClasses[size]} ${className}`;

  return (
    <img 
      src={src} 
      alt={alt} 
      className={classes}
      onError={(e) => {
        if (fallbackSrc && e.target.src !== fallbackSrc) {
          e.target.src = fallbackSrc;
        }
      }}
      {...props}
    />
  );
};

export default Logo;
