import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import {
  Card,
  CardContent,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
  Divider,
  Box
} from '@mui/material';
import {
  TrendingUp,
  ShowChart,
  Timeline,
  Addchart
} from '@mui/icons-material';

export const ChartView: React.FC = observer(() => {
  const [timeframe, setTimeframe] = useState('1D');
  const { marketStore } = useStores();

  return (
    <div className="space-y-4">
      {/* Stock Info Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <Typography variant="h5" className="font-bold text-gray-900">
                RELIANCE
              </Typography>
              <div className="flex items-center space-x-2">
                <Typography variant="h6" className="text-green-600">
                  ₹2,456.30
                </Typography>
                <Typography variant="body1" className="text-green-600">
                  +1.2%
                </Typography>
              </div>
            </div>
            <ButtonGroup variant="outlined" size="small">
              <Button>Buy</Button>
              <Button>Sell</Button>
            </ButtonGroup>
          </div>
        </CardContent>
      </Card>

      {/* Chart Controls */}
      <div className="flex justify-between items-center">
        <ButtonGroup variant="outlined" size="small">
          <Button 
            variant={timeframe === '1D' ? 'contained' : 'outlined'}
            onClick={() => setTimeframe('1D')}
          >
            1D
          </Button>
          <Button 
            variant={timeframe === '1W' ? 'contained' : 'outlined'}
            onClick={() => setTimeframe('1W')}
          >
            1W
          </Button>
          <Button 
            variant={timeframe === '1M' ? 'contained' : 'outlined'}
            onClick={() => setTimeframe('1M')}
          >
            1M
          </Button>
          <Button 
            variant={timeframe === '1Y' ? 'contained' : 'outlined'}
            onClick={() => setTimeframe('1Y')}
          >
            1Y
          </Button>
        </ButtonGroup>

        <div className="flex space-x-2">
          <IconButton>
            <ShowChart />
          </IconButton>
          <IconButton>
            <Timeline />
          </IconButton>
          <IconButton>
            <Addchart />
          </IconButton>
        </div>
      </div>

      {/* Main Chart */}
      <Card className="h-[500px]">
        <CardContent>
          {/* Chart Component would go here */}
          <div className="h-full flex items-center justify-center">
            <Typography variant="body1" color="textSecondary">
              Chart Visualization
            </Typography>
          </div>
        </CardContent>
      </Card>

      {/* Technical Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <Typography variant="subtitle2" className="text-gray-500">
              RSI (14)
            </Typography>
            <Typography variant="h6">65.4</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="subtitle2" className="text-gray-500">
              MACD
            </Typography>
            <Typography variant="h6">12.5</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="subtitle2" className="text-gray-500">
              Volume
            </Typography>
            <Typography variant="h6">2.5M</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});