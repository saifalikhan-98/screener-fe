import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Avatar,
  } from '@mui/material';
  import {
    Search as SearchIcon,
    Notifications as NotificationsIcon,
  } from '@mui/icons-material';
  import { useNavigate } from 'react-router-dom';
  
  export const TopBar: React.FC = observer(() => {
    const { authStore } = useStores();
    const navigate = useNavigate();
    
    return (
      <AppBar position="static" className="bg-white shadow-sm">
        <Toolbar className="justify-between max-w-7xl mx-auto px-4 h-16">
          {/* Logo */}
          <Typography 
            variant="h5" 
            onClick={() => navigate('/')}
            className="font-bold text-blue-600 cursor-pointer"
          >
            TradeScan
          </Typography>
  
          {/* Search */}
          <div className="hidden md:flex items-center bg-slate-50 rounded-lg px-3 py-2 flex-grow mx-8 max-w-md">
            <SearchIcon className="text-gray-400" />
            <input 
              type="text"
              placeholder="Search stocks..."
              className="bg-transparent border-none outline-none ml-2 w-full text-gray-700"
            />
          </div>
  
          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Button
              color="inherit"
              onClick={() => navigate('/charts')}
              className="text-gray-700 hover:text-gray-900"
            >
              Charts
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/market-movers')}
              className="text-gray-700 hover:text-gray-900"
            >
              Market
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/screener')}
              className="text-gray-700 hover:text-gray-900"
            >
              Screener
            </Button>
            
            {/* Notifications */}
            <IconButton className="text-gray-700">
              <NotificationsIcon />
            </IconButton>
  
            {/* Profile */}
            <IconButton 
              onClick={() => navigate('/profile')}
              className="ml-2"
            >
              <Avatar 
                src={authStore.user?.profileImage} 
                className="w-8 h-8"
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  });

function observer(arg0: () => import("react/jsx-runtime").JSX.Element): import("react").FC<{}> {
    throw new Error('Function not implemented.');
}


function useStores(): { authStore: any; } {
    throw new Error('Function not implemented.');
}
