import React from 'react';

const Icon = ({ 
  name, 
  className = '',
  size = 'base',
  color = '',
  ...props 
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl'
  };

  // Brand icons that should use 'fab' prefix instead of 'fas'
  const brandIcons = [
    'facebook-f', 'facebook', 'instagram', 'twitter', 'youtube', 
    'linkedin', 'github', 'whatsapp', 'telegram', 'tiktok',
    'pinterest', 'snapchat', 'discord', 'twitch'
  ];

  const iconPrefix = brandIcons.includes(name) ? 'fab' : 'fas';
  const classes = `${iconPrefix} fa-${name} ${sizeClasses[size]} ${color} ${className}`;

  return <i className={classes} {...props}></i>;
};

export default Icon;
