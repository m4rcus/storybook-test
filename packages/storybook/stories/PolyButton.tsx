import React from 'react';
import './polybutton.css';

interface PolyButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * What background color to use
   */
  color?: 'primary' | 'error' | 'warning' | 'success' | 'info';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  disabled?: boolean;
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const PolyButton = ({
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  disabled = false,
  label,
  ...props
}: PolyButtonProps) => {
  const disabled_status = disabled
    ? 'disabled' : '';
  return (
    <polybutton
      type="button"
      className={[
        'poly-button',
        `poly-button--${variant}`,
        `poly-button--${color}`,
        `poly-button--${size}`,
        disabled_status
      ].join(' ')}
      //      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </polybutton>
  );
};
