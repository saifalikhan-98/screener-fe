// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import { StoreProvider } from './stores/StoreContext';
import { RootStore } from './stores/RootStore';
import { theme } from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';

// Views
import { LoginView } from './views/auth/LoginView';
import { AlertsView } from './views/alerts/Alerts';
import { ChartView } from './views/charts/Charts';
import { DashboardView } from './views/dashboard.tsx/Dashboard';
import { ProfileView } from './views/profile/ProfileView';
import { ScreenerView } from './views/screener/Screener';
import { WatchlistView } from './views/watchlist/Watchlist';
import { MarketMoversView } from './views/markets/MarketMoversView';
import { Layout } from './component/Layout/Layout';


const rootStore = new RootStore();

const PrivateRoute: React.FC<{ children: React.ReactNode }> = observer(({ children }) => {
  const { authStore } = rootStore;
  
  // if (!authStore.isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Layout>{children}</Layout>;
});

const App: React.FC = () => {
  return (
    <StoreProvider store={rootStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginView />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <DashboardView />
                </PrivateRoute>
              }
            />
            <Route
              path="/charts"
              element={
                <PrivateRoute>
                  <ChartView />
                </PrivateRoute>
              }
            />
            <Route
              path="/screener"
              element={
                <PrivateRoute>
                  <ScreenerView />
                </PrivateRoute>
              }
            />
            <Route
              path="/watchlist"
              element={
                <PrivateRoute>
                  <WatchlistView />
                </PrivateRoute>
              }
            />
            <Route
              path="/alerts"
              element={
                <PrivateRoute>
                  <AlertsView />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileView />
                </PrivateRoute>
              }
            />
            <Route
              path="/market-movers"
              element={
                <PrivateRoute>
                  <MarketMoversView />
                </PrivateRoute>
              }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default observer(App);