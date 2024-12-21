import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Box,
  Avatar,
  InputAdornment
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';

export const Layout: React.FC<{ children: React.ReactNode }> = observer(({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authStore } = useStores();

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-100">
      <AppBar position="static" className="bg-white">
        <Toolbar className="px-4">
          {/* Logo */}
          <Typography
            variant="h6"
            onClick={() => navigate('/')}
            className="text-blue-600 font-bold cursor-pointer mr-8"
          >
            TradeScan
          </Typography>

          {/* Search Bar */}
          <TextField
            size="small"
            placeholder="Search stocks..."
            className="bg-slate-50 rounded max-w-md w-full hidden md:flex"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-gray-400" />
                </InputAdornment>
              ),
            }}
          />

          {/* Navigation Items */}
          <Box className="ml-auto flex items-center space-x-4">
            <Button
              color="inherit"
              onClick={() => navigate('/charts')}
              className={isActiveRoute('/charts') ? 'text-blue-600' : 'text-gray-700'}
            >
              Charts
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/market-movers')}
              className={isActiveRoute('/market-movers') ? 'text-blue-600' : 'text-gray-700'}
            >
              Market
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/screener')}
              className={isActiveRoute('/screener') ? 'text-blue-600' : 'text-gray-700'}
            >
              Screener
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/watchlist')}
              className={isActiveRoute('/watchlist') ? 'text-blue-600' : 'text-gray-700'}
            >
              Watchlist
            </Button>

            <IconButton>
              <NotificationsIcon />
            </IconButton>

            <IconButton onClick={() => navigate('/profile')}>
              <Avatar className="h-8 w-8" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
});