import { makeAutoObservable } from 'mobx';
import { AuthStore } from './AuthStore';
import { MarketStore } from './MarketStore';
import { ProfileStore } from './ProfileStore';


export class RootStore {
  authStore: AuthStore;
  profileStore: ProfileStore;
  marketStore: MarketStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.profileStore = new ProfileStore(this);
    this.marketStore = new MarketStore(this);
    makeAutoObservable(this);
  }
}
