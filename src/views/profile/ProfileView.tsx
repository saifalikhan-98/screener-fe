import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
  
  export const ProfileView: React.FC = observer(() => {
    const { profileStore } = useStores();
  
    return (
      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar
                src={profileStore.user?.profileImage}
                className="w-16 h-16"
              />
              <div>
                <Typography variant="h5" className="font-bold text-gray-900">
                  {profileStore.user?.name}
                </Typography>
                <Typography variant="body1" className="text-gray-500">
                  {profileStore.user?.email}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
  
        {/* Subscription Info */}
        <Card>
          <CardContent className="p-6">
            <Typography variant="h6" className="font-bold text-gray-900 mb-4">
              Subscription
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Typography variant="body2" className="text-gray-500">
                  Plan
                </Typography>
                <Typography variant="body1" className="font-medium">
                  {profileStore.user?.subscription.plan}
                </Typography>
              </div>
              <div>
                <Typography variant="body2" className="text-gray-500">
                  Status
                </Typography>
                <Chip
                  label={profileStore.user?.subscription.status}
                  color={profileStore.user?.subscription.status === 'active' ? 'success' : 'error'}
                  size="small"
                />
              </div>
              <div>
                <Typography variant="body2" className="text-gray-500">
                  Expires
                </Typography>
                <Typography variant="body1" className="font-medium">
                  {profileStore.user?.subscription.expiresAt.toLocaleDateString()}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
  
        {/* Billing History */}
        <Card>
          <CardContent className="p-6">
            <Typography variant="h6" className="font-bold text-gray-900 mb-4">
              Billing History
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {profileStore.user?.billing.history.map((bill) => (
                  <TableRow key={bill.id}>
                    <TableCell>{bill.date.toLocaleDateString()}</TableCell>
                    <TableCell>₹{bill.amount}</TableCell>
                    <TableCell>
                      <Chip
                        label={bill.status}
                        color={
                          bill.status === 'paid'
                            ? 'success'
                            : bill.status === 'pending'
                            ? 'warning'
                            : 'error'
                        }
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  });