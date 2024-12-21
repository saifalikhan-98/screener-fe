import React from 'react';
import { Typography, Chip } from '@mui/material';

interface PriceChangeProps {
  value: number;
  showArrow?: boolean;
  size?: 'small' | 'medium';
}

export const PriceChange: React.FC<PriceChangeProps> = ({
  value,
  showArrow = true,
  size = 'medium'
}) => {
  const isPositive = value >= 0;
  
  return (
    <Chip
      label={`${isPositive ? '+' : ''}${value}%`}
      size={size}
      className={
        isPositive 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }
    />
  );
};