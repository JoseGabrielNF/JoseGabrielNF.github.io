import React from 'react';

const Input = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  id,
  required = false,
  className = '',
  label,
  ...props 
}) => {
  const inputClasses = `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        className={inputClasses}
        {...props}
      />
    </div>
  );
};

export default Input;