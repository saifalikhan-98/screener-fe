import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip
} from '@mui/material';

interface StockCardProps {
  symbol: string;
  price: number;
  change: number;
  volume: string;
  marketCap: string;
  onClick?: () => void;
}

export const StockCard: React.FC<StockCardProps> = ({
  symbol,
  price,
  change,
  volume,
  marketCap,
  onClick
}) => {
  return (
    <Card onClick={onClick} className="cursor-pointer hover:shadow-md transition-shadow">
      <CardContent>
        <div className="flex justify-between items-start">
          <div>
            <Typography variant="h6" className="font-bold">
              {symbol}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Vol: {volume}
            </Typography>
          </div>
          <div className="text-right">
            <Typography variant="h6">
              ₹{price.toLocaleString()}
            </Typography>
            <Chip
              label={`${change >= 0 ? '+' : ''}${change}%`}
              size="small"
              className={change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
            />
          </div>
        </div>
        <Typography variant="body2" color="textSecondary" className="mt-2">
          Market Cap: {marketCap}
        </Typography>
      </CardContent>
    </Card>
  );
};