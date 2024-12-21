import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  IconButton
} from '@mui/material';
import { FilterList, SaveAlt } from '@mui/icons-material';

export const ScreenerView: React.FC = observer(() => {
  const { marketStore } = useStores();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="space-y-4">
      {/* Screener Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="font-bold">
              Stock Screener
            </Typography>
            <div className="flex space-x-2">
              <IconButton>
                <SaveAlt />
              </IconButton>
              <IconButton>
                <FilterList />
              </IconButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormControl fullWidth>
              <InputLabel>Exchange</InputLabel>
              <Select value="NSE" label="Exchange">
                <MenuItem value="NSE">NSE</MenuItem>
                <MenuItem value="BSE">BSE</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Market Cap</InputLabel>
              <Select value="all" label="Market Cap">
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="large">Large Cap</MenuItem>
                <MenuItem value="mid">Mid Cap</MenuItem>
                <MenuItem value="small">Small Cap</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Industry</InputLabel>
              <Select value="all" label="Industry">
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="it">IT</MenuItem>
                <MenuItem value="banking">Banking</MenuItem>
                <MenuItem value="pharma">Pharma</MenuItem>
              </Select>
            </FormControl>
          </div>
        </CardContent>
      </Card>

      {/* Technical Filters */}
      <Card>
        <CardContent>
          <Typography variant="h6" className="font-bold mb-4">
            Technical Filters
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Typography variant="subtitle2" className="mb-2">
                RSI (14)
              </Typography>
              <div className="flex space-x-2">
                <TextField
                  size="small"
                  label="Min"
                  type="number"
                />
                <TextField
                  size="small"
                  label="Max"
                  type="number"
                />
              </div>
            </div>

            <div>
              <Typography variant="subtitle2" className="mb-2">
                MACD
              </Typography>
              <Select
                fullWidth
                size="small"
                value="crossover"
              >
                <MenuItem value="crossover">Bullish Crossover</MenuItem>
                <MenuItem value="crossunder">Bearish Crossunder</MenuItem>
              </Select>
            </div>

            <div>
              <Typography variant="subtitle2" className="mb-2">
                Volume
              </Typography>
              <TextField
                fullWidth
                size="small"
                label="Above Average"
                type="number"
                InputProps={{
                    endAdornment: (
                    <Typography variant="body2" className="text-gray-500 mr-2">
                        %
                    </Typography>
                    )
                }}
                />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" className="font-bold mb-4">
            Results
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Change</TableCell>
                <TableCell>Volume</TableCell>
                <TableCell>Market Cap</TableCell>
                <TableCell>RSI</TableCell>
                <TableCell>MACD</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" className="font-medium">
                    RELIANCE
                  </Typography>
                </TableCell>
                <TableCell>₹2,456.30</TableCell>
                <TableCell>
                  <Chip
                    label="+1.2%"
                    size="small"
                    className="bg-green-100 text-green-800"
                  />
                </TableCell>
                <TableCell>2.5M</TableCell>
                <TableCell>15.6T</TableCell>
                <TableCell>65.4</TableCell>
                <TableCell>12.5</TableCell>
              </TableRow>
              {/* Add more rows */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
});
