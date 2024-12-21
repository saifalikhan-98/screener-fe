import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Tab,
  Tabs,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

export const AlertsView: React.FC = observer(() => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Typography variant="h5" className="font-bold">
          Price Alerts
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Create Alert
        </Button>
      </div>

      {/* Tabs */}
      <Card>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          className="border-b border-gray-200"
        >
          <Tab label="Active" />
          <Tab label="Triggered" />
          <Tab label="All" />
        </Tabs>

        <CardContent>
          {/* Alert Items */}
          <div className="space-y-4">
            <Card variant="outlined">
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <Typography variant="h6">RELIANCE</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Price above ₹2,500
                    </Typography>
                  </div>
                  <Chip 
                    label="Active" 
                    className="bg-green-100 text-green-800"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Created on: 21 Dec 2024
                </div>
              </CardContent>
            </Card>
            {/* More alert items */}
          </div>
        </CardContent>
      </Card>

      {/* Create Alert Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Create New Alert</DialogTitle>
        <DialogContent>
          <div className="space-y-4 mt-2">
            <TextField
              fullWidth
              label="Stock Symbol"
              variant="outlined"
            />
            
            <FormControl fullWidth>
              <InputLabel>Alert Type</InputLabel>
              <Select label="Alert Type" value="price">
                <MenuItem value="price">Price Alert</MenuItem>
                <MenuItem value="technical">Technical Alert</MenuItem>
                <MenuItem value="volume">Volume Alert</MenuItem>
              </Select>
            </FormControl>

            <div className="grid grid-cols-2 gap-4">
              <FormControl fullWidth>
                <InputLabel>Condition</InputLabel>
                <Select label="Condition" value="above">
                  <MenuItem value="above">Above</MenuItem>
                  <MenuItem value="below">Below</MenuItem>
                </Select>
              </FormControl>
              
              <TextField
                label="Value"
                type="number"
                variant="outlined"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>
            Cancel
          </Button>
          <Button 
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Create Alert
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});