import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Chip
} from '@mui/material';
import { StockCard } from '../../component/StockCard';

export const DashboardView: React.FC = observer(() => {
  const { marketStore } = useStores();

  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              NIFTY 50
            </Typography>
            <Typography variant="h5" className="font-bold">
              19,425.30
            </Typography>
            <Typography variant="body2" className="text-green-600">
              +1.2% (+230.45)
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              Market Breadth
            </Typography>
            <Typography variant="h5" className="font-bold">
              2.33
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={70}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              Market Volume
            </Typography>
            <Typography variant="h5" className="font-bold">
              125.3M
            </Typography>
            <Typography variant="body2" className="text-green-600">
              +15% vs Avg
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* Watchlist Summary */}
      <Card>
        <CardContent>
          <Typography variant="h6" className="font-bold mb-4">
            Watchlist
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StockCard
              symbol="RELIANCE"
              price={2456.30}
              change={1.2}
              volume="2.5M"
              marketCap="15.6T"
            />
            {/* More stock cards */}
          </div>
        </CardContent>
      </Card>

      {/* Active Alerts */}
      <Card>
        <CardContent>
          <Typography variant="h6" className="font-bold mb-4">
            Active Alerts
          </Typography>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <div>
                <Typography variant="subtitle2">RELIANCE</Typography>
                <Typography variant="body2" color="textSecondary">
                  Price above ₹2,500
                </Typography>
              </div>
              <Chip 
                label="Active" 
                size="small"
                className="bg-blue-100 text-blue-800"
              />
            </div>
            {/* More alert items */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
