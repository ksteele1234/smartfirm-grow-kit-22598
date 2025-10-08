interface CheckmarkIconProps {
  className?: string;
  variant?: 'blue-border' | 'solid';
}

export const CheckmarkIcon = ({ className = "", variant = 'blue-border' }: CheckmarkIconProps) => {
  if (variant === 'blue-border') {
    return (
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="12" cy="12" r="11" fill="#FAFDD6" stroke="#647FBC" strokeWidth="2"/>
        <path 
          d="M7 12L10.5 15.5L17 9" 
          stroke="#FAFDD6" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="10" cy="10" r="10" fill="#647FBC"/>
      <path 
        d="M6 10L8.5 12.5L14 7" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckmarkIcon;
