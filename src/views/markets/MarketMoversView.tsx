import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import {
  Card,
  CardContent,
  Typography,
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  InfoOutlined,
  FilterList
} from '@mui/icons-material';

export const MarketMoversView: React.FC = observer(() => {
  const [exchange, setExchange] = useState('NSE');
  const [marketCap, setMarketCap] = useState('all');
  const [sector, setSector] = useState('all');
  const { marketStore } = useStores();

  return (
    <div className="space-y-4">
      {/* Market Overview */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                NIFTY 50
              </Typography>
              <div className="flex items-center space-x-2">
                <Typography variant="h6">19,425.30</Typography>
                <Chip 
                  label="+1.2%" 
                  size="small" 
                  className="bg-green-100 text-green-800"
                />
              </div>
            </div>
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                Advances
              </Typography>
              <Typography variant="h6" className="text-green-600">35</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                Declines
              </Typography>
              <Typography variant="h6" className="text-red-600">15</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" color="textSecondary">
                Total Volume
              </Typography>
              <Typography variant="h6">125.3M</Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <ButtonGroup variant="outlined" size="small">
              <Button 
                variant={exchange === 'NSE' ? 'contained' : 'outlined'}
                onClick={() => setExchange('NSE')}
              >
                NSE
              </Button>
              <Button 
                variant={exchange === 'BSE' ? 'contained' : 'outlined'}
                onClick={() => setExchange('BSE')}
              >
                BSE
              </Button>
            </ButtonGroup>

            <FormControl size="small" className="min-w-[150px]">
              <InputLabel>Market Cap</InputLabel>
              <Select
                value={marketCap}
                label="Market Cap"
                onChange={(e) => setMarketCap(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="large">Large Cap</MenuItem>
                <MenuItem value="mid">Mid Cap</MenuItem>
                <MenuItem value="small">Small Cap</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" className="min-w-[150px]">
              <InputLabel>Sector</InputLabel>
              <Select
                value={sector}
                label="Sector"
                onChange={(e) => setSector(e.target.value)}
              >
                <MenuItem value="all">All Sectors</MenuItem>
                <MenuItem value="it">IT</MenuItem>
                <MenuItem value="banking">Banking</MenuItem>
                <MenuItem value="auto">Auto</MenuItem>
                <MenuItem value="pharma">Pharma</MenuItem>
              </Select>
            </FormControl>
          </div>
        </CardContent>
      </Card>

      {/* Top Gainers */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="text-green-600" />
              <Typography variant="h6" className="font-bold">
                Top Gainers
              </Typography>
              <Tooltip title="Stocks with highest % gain">
                <IconButton size="small">
                  <InfoOutlined fontSize="small" />
                </IconButton>
              </Tooltip>
            </div>
            <IconButton>
              <FilterList />
            </IconButton>
          </div>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell align="right">LTP</TableCell>
                <TableCell align="right">Change %</TableCell>
                <TableCell align="right">Volume</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">52W H/L</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" className="font-medium">
                    RELIANCE
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Reliance Industries
                  </Typography>
                </TableCell>
                <TableCell align="right">₹2,456.30</TableCell>
                <TableCell align="right">
                  <Chip 
                    label="+5.2%" 
                    size="small"
                    className="bg-green-100 text-green-800"
                  />
                </TableCell>
                <TableCell align="right">2.5M</TableCell>
                <TableCell align="right">15.6T</TableCell>
                <TableCell align="right">2,768 / 2,180</TableCell>
              </TableRow>
              {/* Add more rows */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Top Losers */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingDown className="text-red-600" />
              <Typography variant="h6" className="font-bold">
                Top Losers
              </Typography>
              <Tooltip title="Stocks with highest % loss">
                <IconButton size="small">
                  <InfoOutlined fontSize="small" />
                </IconButton>
              </Tooltip>
            </div>
            <IconButton>
              <FilterList />
            </IconButton>
          </div>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell align="right">LTP</TableCell>
                <TableCell align="right">Change %</TableCell>
                <TableCell align="right">Volume</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">52W H/L</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" className="font-medium">
                    INFY
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Infosys Limited
                  </Typography>
                </TableCell>
                <TableCell align="right">₹1,456.30</TableCell>
                <TableCell align="right">
                  <Chip 
                    label="-3.2%" 
                    size="small"
                    className="bg-red-100 text-red-800"
                  />
                </TableCell>
                <TableCell align="right">1.8M</TableCell>
                <TableCell align="right">8.2T</TableCell>
                <TableCell align="right">1,620 / 1,150</TableCell>
              </TableRow>
              {/* Add more rows */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
});