import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export class MarketStore {
  stocks: any[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  // ... market methods
}