export interface IUser {
    id: string;
    email: string;
    name: string;
    profileImage?: string;
    subscription: {
      plan: string;
      status: 'active' | 'inactive';
      expiresAt: Date;
    };
    alerts: Array<{
      id: string;
      type: 'price' | 'technical' | 'volume';
      condition: string;
      symbol: string;
      value: number;
      status: 'active' | 'triggered';
    }>;
    billing: {
      history: Array<{
        id: string;
        amount: number;
        date: Date;
        status: 'paid' | 'pending' | 'failed';
      }>;
      defaultPayment?: {
        type: 'card' | 'upi';
        last4?: string;
      };
    };
  }
  