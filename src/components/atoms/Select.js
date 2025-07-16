import React from 'react';

const Select = ({ 
  options = [],
  value,
  onChange,
  name,
  id,
  required = false,
  className = '',
  label,
  placeholder = 'Selecione',
  ...props 
}) => {
  const selectClasses = `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        className={selectClasses}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;