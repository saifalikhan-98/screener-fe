import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Divider,
  } from '@mui/material';
  import { Google as GoogleIcon } from '@mui/icons-material';
  import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
  
  
  export const LoginView: React.FC = observer(() => {
    const { authStore } = useStores();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      //const success = await authStore.login(email, password);
      //if (success) navigate('/');
      navigate('/');
    };
  
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-6 p-8">
            <Typography variant="h4" className="text-center font-bold text-gray-900">
              Welcome to TradeScan
            </Typography>
  
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
  
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white"
              />
  
              <Button
                fullWidth
                variant="contained"
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 py-3 text-base"
              >
                Sign In
              </Button>
            </form>
  
            <div className="relative">
              <Divider>
                <Typography variant="body2" className="text-gray-500 px-2">
                  Or continue with
                </Typography>
              </Divider>
            </div>
  
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  });

