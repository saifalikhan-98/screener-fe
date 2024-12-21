import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

export const WatchlistView: React.FC = observer(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Typography variant="h5" className="font-bold">
          Watchlists
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Create Watchlist
        </Button>
      </div>

      {/* Watchlist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <div className="flex justify-between items-start mb-4">
              <Typography variant="h6" className="font-bold">
                Main Watchlist
              </Typography>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MoreVertIcon />
              </IconButton>
            </div>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>RELIANCE</TableCell>
                  <TableCell align="right">₹2,456.30</TableCell>
                  <TableCell align="right">
                    <Chip 
                      label="+1.2%" 
                      size="small"
                      className="bg-green-100 text-green-800"
                    />
                  </TableCell>
                </TableRow>
                {/* More rows */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>
          <EditIcon className="mr-2" /> Edit
        </MenuItem>
        <MenuItem className="text-red-600">
          <DeleteIcon className="mr-2" /> Delete
        </MenuItem>
      </Menu>
    </div>
  );
});