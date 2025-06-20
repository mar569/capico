import React from 'react';

type ButtonProps = {
  label: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  fontSize?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  fontSize = '22px',
}) => {
  const baseClasses =
    'rounded-4xl p-[26px] w-[260px] font-semibold transition-colors duration-500 border cursor-pointer focus:ring-4 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = variant === 'primary'
    ? 'bg-[#0e0915] text-white border-[#B689FF] hover:border-[#8f00ff] focus:ring-[#8f00ff]'
    : 'bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300 hover:border-[#8f00ff] focus:ring-gray-400';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{ fontSize }}
    >
      {label}
    </button>
  );
};

export default Button;
